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
  return Inertia::render('Dashboard', [
    'notification' => session()->pull('notification'),
    'socialAccounts' => $user->socialAccounts,
  ]);
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

  Route::resource('users', UserController::class);
});


// OAuth login and callback
Route::get('auth/{provider}/redirect', [SocialAccountController::class, 'loginRedirect'])->name('social.login.redirect');
Route::get('auth/{provider}/callback', [SocialAccountController::class, 'loginCallback'])->name('social.login.callback');

// Link a new social account
Route::get('auth/{provider}/link', [SocialAccountController::class, 'linkRedirect'])->name('social.link.redirect');
Route::get('auth/{provider}/link/callback', [SocialAccountController::class, 'linkCallback'])->name('social.link.callback');

// Unlink a social account
Route::get('auth/{provider}/unlink', [SocialAccountController::class, 'unlink'])->name('social.unlink');


Route::get('settings', function () {
  return Inertia::render('Settings', [
    'notification' => session()->pull('notification'),
    'social_accounts' => Auth::user()->socialAccounts,
  ]);
})->middleware(['auth'])->name('settings');

require __DIR__ . '/auth.php';
