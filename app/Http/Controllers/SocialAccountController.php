<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialAccountController extends Controller
{
  public function redirect($provider): \Symfony\Component\HttpFoundation\RedirectResponse|RedirectResponse
  {
    return Socialite::driver($provider)->redirect();
  }

  public function callback($provider)
  {
    try {
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/login')->with('notification', [
        'status' => 'error',
        'title' => 'Login Gagal',
        'message' => 'Login dengan ' . ucfirst($provider) . ' gagal.',
      ]);
    }

    $socialAccount = SocialAccount::where('provider', $provider)
      ->where('provider_id', $socialUser->getId())
      ->first();

    if ($socialAccount) {
      $user = $socialAccount->user;
      Auth::login($user, true);

      return redirect('/dashboard')->with('notification', [
        'status' => 'success',
        'title' => 'Berhasil Masuk Akun',
        'message' => 'Selamat datang kembali, ' . Auth::user()->name . '!',
      ]);
    } else {
      return redirect('/login')->with('notification', [
        'status' => 'error',
        'title' => 'Akun Tidak Ditemukan',
        'message' => 'Akun sosial media ini belum ditautkan ke akun internal Anda. Harap tautkan terlebih dahulu.',
      ]);
    }
  }

  public function link($provider)
  {
    $user = Auth::user();

    try {
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/dashboard')->with('notification', [
        'status' => 'error',
        'title' => 'Gagal Menautkan Akun',
        'message' => 'Gagal menautkan akun sosial media: ' . $e->getMessage(),
      ]);
    }

    if ($user->socialAccounts()->where('provider', $provider)->exists()) {
      return redirect('/dashboard')->with('notification', [
        'status' => 'error',
        'title' => 'Akun Sudah Ditautkan',
        'message' => 'Akun sosial media ini sudah ditautkan.',
      ]);
    }

    $user->socialAccounts()->create([
      'provider' => $provider,
      'provider_id' => $socialUser->getId(),
    ]);

    return redirect('/dashboard')->with('notification', [
      'status' => 'success',
      'title' => 'Akun Sosial Media Ditautkan',
      'message' => 'Akun sosial media berhasil ditautkan.',
    ]);
  }

  public function unlink($provider)
  {
    $user = Auth::user();
    $user->socialAccounts()->where('provider', $provider)->delete();

    return redirect('/dashboard')->with('notification', [
      'status' => 'success',
      'title' => ucfirst($provider) . ' Akun Dilepas',
      'message' => ucfirst($provider) . ' account has been unlinked.',
    ]);
  }
}
