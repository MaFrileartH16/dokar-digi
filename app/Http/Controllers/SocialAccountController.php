<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Laravel\Socialite\Facades\Socialite;

class SocialAccountController extends Controller
{
  public function redirect($provider)
  {
    Session::put('oauth_flow', request('flow'));
    return Socialite::driver($provider)->redirect();
  }

  public function callback($provider)
  {
    try {
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/login')->with('notification', [
        'status' => 'error',
        'title' => 'Gagal Masuk Akun',
        'message' => 'Masuk dengan ' . ucfirst($provider) . ' gagal. Coba lagi.',
      ]);
    }

    $flow = Session::pull('oauth_flow');
    return $flow === 'login' ? $this->handleLoginFlow($socialUser, $provider)
      : ($flow === 'link' ? $this->handleLinkFlow($socialUser, $provider)
        : redirect('/login')->with('notification', [
          'status' => 'error',
          'title' => 'Gagal Mengenali Alur',
          'message' => 'Alur autentikasi tidak dikenali. Silakan coba lagi.',
        ]));
  }

  private function handleLoginFlow($socialUser, $provider)
  {
    $socialAccount = SocialAccount::where('provider', $provider)
      ->where('provider_id', $socialUser->getId())
      ->first();

    if ($socialAccount) {
      Auth::login($socialAccount->user, true);
      return redirect('/dashboard')->with('notification', [
        'status' => 'success',
        'title' => 'Berhasil Masuk Akun',
        'message' => 'Selamat datang kembali, ' . Auth::user()->full_name . '!',
      ]);
    }

    return redirect('/login')->with('notification', [
      'status' => 'info',
      'title' => 'Gagal Masuk Akun',
      'message' => 'Akun ' . ucfirst($provider) . ' ini belum ditautkan ke akun internal Anda. Harap tautkan terlebih dahulu.',
    ]);
  }

  private function handleLinkFlow($socialUser, $provider)
  {
    $user = Auth::user();

    if (SocialAccount::where('provider', $provider)
      ->where('provider_id', $socialUser->getId())
      ->where('user_id', '!=', $user->id)
      ->exists()) {
      return redirect('/settings')->with('notification', [
        'status' => 'error',
        'title' => 'Gagal Menautkan Akun',
        'message' => 'Akun ' . ucfirst($provider) . ' ini sudah ditautkan ke pengguna lain.',
      ]);
    }

    if ($user->socialAccounts()->where('provider', $provider)->exists()) {
      return redirect('/settings')->with('notification', [
        'status' => 'error',
        'title' => 'Akun Sudah Ditautkan',
        'message' => 'Akun ' . ucfirst($provider) . ' ini sudah ditautkan ke akun internal Anda.',
      ]);
    }

    $user->socialAccounts()->create([
      'provider' => $provider,
      'provider_id' => $socialUser->getId(),
    ]);

    return redirect('/settings')->with('notification', [
      'status' => 'success',
      'title' => 'Berhasil Menautkan Akun',
      'message' => 'Akun ' . ucfirst($provider) . ' Anda berhasil ditautkan.',
    ]);
  }

  public function unlink($provider)
  {
    Auth::user()->socialAccounts()->where('provider', $provider)->delete();

    return redirect('/settings')->with('notification', [
      'status' => 'success',
      'title' => 'Berhasil Melepaskan Akun',
      'message' => 'Akun ' . ucfirst($provider) . ' Anda berhasil dilepaskan.',
    ]);
  }
}
