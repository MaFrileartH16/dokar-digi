<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialAccountController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login');
Route::get('/dashboard', function () {
  $user = Auth::user();

  // Ambil akun sosial media yang terhubung dengan pengguna
  $socialAccounts = $user->socialAccounts;
  return Inertia::render('Dashboard', [
    'notification' => session()->pull('notification'),
    'socialAccounts' => $socialAccounts,
  ]);
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route untuk redirect ke provider (Google, GitHub, dll)
Route::get('/auth/{provider}/redirect', [SocialAccountController::class, 'redirect'])->name('social-account.redirect');

// Route untuk callback dari provider (Google, GitHub, dll)
Route::get('/auth/{provider}/callback', [SocialAccountController::class, 'callback'])->name('social-account.callback');

// Rute untuk menautkan akun sosial media
Route::post('/account/link/{provider}', [SocialAccountController::class, 'link'])->name('social-account.link');

// Rute untuk melepaskan (unlink) akun sosial media
Route::post('/account/unlink/{provider}', [SocialAccountController::class, 'unlink'])->name('social-account.unlink');

Route::resource('users', UserController::class)->middleware(['auth']);

require __DIR__ . '/auth.php';
