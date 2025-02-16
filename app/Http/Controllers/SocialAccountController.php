<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialAccountController extends Controller
{
  // Fungsi untuk redirect ke provider (Google, GitHub, dll)
  public function redirect($provider)
  {
    return Socialite::driver($provider)->redirect();
  }

  // Fungsi untuk handle callback setelah login dengan provider
  public function callback($provider)
  {
    try {
      // Mendapatkan data pengguna dari provider OAuth
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/login')->withErrors('Login dengan ' . ucfirst($provider) . ' gagal.');
    }

    // Cek apakah pengguna sudah terdaftar dengan email yang sama
    $user = User::where('email', $socialUser->getEmail())->first();

    // Jika pengguna tidak ditemukan, buat pengguna baru
    if (!$user) {
      $user = User::create([
        'name' => $socialUser->getName(),
        'email' => $socialUser->getEmail(),
        'password' => Hash::make(uniqid()), // Membuat password acak
      ]);
    }

    // Menyimpan atau memperbarui akun sosial media
    $user->socialAccounts()->updateOrCreate(
      ['provider' => $provider, 'provider_id' => $socialUser->getId()],
      ['user_id' => $user->id]
    );

    // Melakukan login
    Auth::login($user, true);

    // Redirect ke dashboard setelah login berhasil
    return redirect('/dashboard');
  }

  // Menautkan akun sosial media tambahan (misalnya Google atau GitHub) ke akun yang sudah ada
  public function link($provider)
  {
    $user = Auth::user(); // Ambil pengguna yang sedang login

    try {
      // Mendapatkan data pengguna dari provider OAuth
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/dashboard')->withErrors('Gagal menautkan akun sosial media: ' . $e->getMessage());
    }

    // Cek apakah akun sosial media sudah ada untuk provider ini
    if ($user->socialAccounts()->where('provider', $provider)->exists()) {
      return redirect('/dashboard')->withErrors('Akun sosial media ini sudah ditautkan.');
    }

    // Menyimpan akun sosial media baru
    $user->socialAccounts()->create([
      'provider' => $provider,
      'provider_id' => $socialUser->getId(),
    ]);

    // Redirect ke halaman dashboard dengan pesan sukses
    return redirect('/dashboard')->with('success', 'Akun sosial media berhasil ditautkan.');
  }


  // Menghapus (unlink) akun sosial media dari akun yang sudah ada
  public function unlink($provider)
  {
    $user = Auth::user(); // Ambil pengguna yang sedang login

    // Hapus akun sosial media untuk provider yang diminta
    $user->socialAccounts()->where('provider', $provider)->delete();

    // Redirect ke halaman dashboard dengan pesan sukses
    return redirect('/dashboard')->with('success', ucfirst($provider) . ' account has been unlinked.');
  }

}
