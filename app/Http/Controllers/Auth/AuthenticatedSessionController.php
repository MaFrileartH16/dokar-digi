<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
  public function create(): Response
  {
    return Inertia::render('Auth/Login', [
      'notification' => session()->pull('notification'),
    ]);
  }

  public function store(LoginRequest $request): RedirectResponse
  {
    try {
      Auth::attempt($request->only('email', 'password'));
      $request->session()->regenerate();

      return redirect()->intended(route('dashboard', absolute: false))
        ->with('notification', [
          'status' => 'success',
          'title' => 'Berhasil Masuk Akun',
          'message' => 'Selamat datang kembali, ' . Auth::user()->name . '!',
        ]);
    } catch (Exception $e) {
      return back()->with('notification', [
        'status' => 'error',
        'title' => 'Gagal Masuk Akun',
        'message' => 'Alamat surel atau kata sandi salah. Silakan coba lagi.',
      ]);
    }
  }

  public function destroy(Request $request): RedirectResponse
  {
    try {
      Auth::guard('web')->logout();

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      return redirect('/')->with('notification', [
        'status' => 'success',
        'title' => 'Berhasil KeluarAkun',
        'message' => 'Sampai jumpa lagi, ' . Auth::user()->name . '!',
      ]);
    } catch (Exception $e) {
      return redirect('/')->with('notification', [
        'status' => 'error',
        'title' => 'Gagal Keluar Akun',
        'message' => 'Terjadi kesalahan saat keluar akun. Silakan coba lagi.',
      ]);
    }
  }
}
