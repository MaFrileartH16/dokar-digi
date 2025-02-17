<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
  public function index(Request $request)
  {
    return Inertia::render('Users/Index', [
      'users' => User::with('roles')
        ->whereDoesntHave('roles', fn($query) => $query->where('name', 'Admin'))
        ->get()  // Removed pagination
        ->map(fn($user) => $user->only(['id', 'full_name', 'email']) + [
            'roles' => $user->roles->pluck('name')
          ]),
      'filters' => [],
      'notification' => session()->pull('notification'),
    ]);
  }

  public function store(Request $request)
  {
    $user = User::create([
      ...$request->only(['full_name', 'email', 'username']),
      'password' => Hash::make($request->password),
    ]);
    $user->assignRole($request->role);

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'Pengguna Dibuat',
      'message' => 'Pengguna telah berhasil dibuat.',
    ]);
  }

  public function create()
  {
    return Inertia::render('Users/Create', [
      'notification' => session()->pull('notification'),
      'roles' => Role::where('name', '!=', 'Admin')->pluck('name')
    ]);
  }

  public function edit(User $user)
  {
    return Inertia::render('Users/Edit', [
      'user' => $user->toArray() + [
          'roles' => $user->roles->pluck('name')->toArray(),  // Plucking the role names of the specific user
        ],
      'notification' => session()->pull('notification'),
      'roles' => Role::where('name', '!=', 'Admin')->pluck('name') // All roles except 'Admin'
    ]);
  }

  public function update(Request $request, User $user)
  {
    $user->update([
      ...$request->only(['full_name', 'email', 'username']),
      'password' => $request->filled('password') ? $request->password : $user->password,
    ]);

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'Pengguna Diperbarui',
      'message' => 'Informasi pengguna telah berhasil diperbarui.',
    ]);
  }

  public function destroy(User $user)
  {
    $user->delete();

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'Pengguna Dihapus',
      'message' => 'Pengguna telah berhasil dihapus.',
    ]);
  }
}
