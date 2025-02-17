<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Laravel\Socialite\Facades\Socialite;

class SocialAccountController extends Controller
{
  /**
   * Redirect to the social provider for authentication (login or link).
   */
  public function redirect($provider)
  {
    // Store the flow type in session (you can set 'login' or 'link' based on the context)
    // For example, in your front-end or before calling this method, you'd decide if it's a login or link.
    $flow = request('flow');  // assuming you're passing the flow type as a query parameter
    Session::put('oauth_flow', $flow);

    // Redirect to the social provider for authentication
    return Socialite::driver($provider)->redirect();
  }

  /**
   * Callback from the social provider after user authenticates.
   */
  public function callback($provider)
  {
    try {
      // Retrieve the user from the social provider
      $socialUser = Socialite::driver($provider)->user();
    } catch (Exception $e) {
      return redirect('/login')->with('notification', [
        'status' => 'error',
        'title' => 'Login Gagal',
        'message' => 'Login dengan ' . ucfirst($provider) . ' gagal. Coba lagi.',
      ]);
    }

    // Get the flow from session
    $flow = Session::get('oauth_flow');
    Session::forget('oauth_flow');  // Clear session flow after use

    // Handle flow logic based on session
    if ($flow === 'login') {
      return $this->handleLoginFlow($socialUser, $provider);
    }

    if ($flow === 'link') {
      return $this->handleLinkFlow($socialUser, $provider);
    }

    return redirect('/login')->with('notification', [
      'status' => 'error',
      'title' => 'Flow Tidak Dikenal',
      'message' => 'Alur autentikasi tidak dikenali. Silakan coba lagi.',
    ]);
  }

  /**
   * Handle the login flow.
   */
  private function handleLoginFlow($socialUser, $provider)
  {
    // Check if the social account exists in the database
    $socialAccount = SocialAccount::where('provider', $provider)
      ->where('provider_id', $socialUser->getId())
      ->first();

    if ($socialAccount) {
      // If the social account exists, log the user in
      Auth::login($socialAccount->user, true);
      return redirect('/dashboard')->with('notification', [
        'status' => 'success',
        'title' => 'Berhasil Masuk Akun',
        'message' => 'Selamat datang kembali, ' . Auth::user()->name . '!',
      ]);
    } else {
      // If the account doesn't exist, redirect to link the account
      return redirect('/login')->with('notification', [
        'status' => 'info',
        'title' => 'Akun Tidak Ditemukan',
        'message' => 'Akun sosial media ini belum ditautkan ke akun internal Anda. Harap tautkan terlebih dahulu.',
      ]);
    }
  }

  /**
   * Handle the link flow (after OAuth authentication).
   */
  private function handleLinkFlow($socialUser, $provider)
  {
    // Get the currently authenticated user
    $user = Auth::user();

    // Check if the social account is already linked to another user
    $existingAccount = SocialAccount::where('provider', $provider)
      ->where('provider_id', $socialUser->getId())
      ->where('user_id', '!=', $user->id)
      ->first();

    if ($existingAccount) {
      return redirect('/settings')->with('notification', [
        'status' => 'error',
        'title' => 'Akun Sudah Digunakan',
        'message' => 'Akun sosial media ini sudah ditautkan ke pengguna lain.',
      ]);
    }

    // Check if the social account is already linked to the current user
    if ($user->socialAccounts()->where('provider', $provider)->exists()) {
      return redirect('/settings')->with('notification', [
        'status' => 'error',
        'title' => 'Akun Sudah Ditautkan',
        'message' => 'Akun sosial media ini sudah ditautkan ke akun Anda.',
      ]);
    }

    // Link the social account to the user's internal account
    $user->socialAccounts()->create([
      'provider' => $provider,
      'provider_id' => $socialUser->getId(),
    ]);

    return redirect('/settings')->with('notification', [
      'status' => 'success',
      'title' => 'Akun Sosial Media Ditautkan',
      'message' => 'Akun sosial media berhasil ditautkan ke akun Anda.',
    ]);
  }

  /**
   * Unlink a social account from the user's internal account.
   */
  public function unlink($provider)
  {
    // Unlink the social account from the user's account
    Auth::user()->socialAccounts()->where('provider', $provider)->delete();

    return redirect('/settings')->with('notification', [
      'status' => 'success',
      'title' => ucfirst($provider) . ' Akun Dilepas',
      'message' => ucfirst($provider) . ' account has been unlinked.',
    ]);
  }
}
