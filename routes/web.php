<?php

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RolePermissionController;
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

  Route::resource('users', UserController::class)->middleware('can:viewAny,App\Models\User');
  Route::resource('roles', RoleController::class)->middleware('can:viewAny,App\Models\Role');
  Route::resource('roles.permissions', PermissionController::class)->middleware('can:viewAny,App\Models\Permission');
  Route::post('roles/{role}/permissions/give', [RolePermissionController::class, 'give'])->name('roles.permissions.give');
});


// Redirect to OAuth provider for login or link
Route::get('auth/{provider}/redirect', [SocialAccountController::class, 'redirect'])->name('oauth.redirect');

// Callback from OAuth provider after user authenticates
Route::get('auth/{provider}/callback', [SocialAccountController::class, 'callback'])->name('oauth.callback');

// Unlink a social account
Route::get('auth/{provider}/unlink', [SocialAccountController::class, 'unlink'])->name('oauth.unlink');


Route::get('settings', function () {
  return Inertia::render('Settings', [
    'notification' => session()->pull('notification'),
    'social_accounts' => Auth::user()->socialAccounts,
  ]);
})->middleware(['auth'])->name('settings');

require __DIR__ . '/auth.php';
