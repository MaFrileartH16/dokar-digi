<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
  public function index(Request $request)
  {
    $perPage = $request->input('per_page', 5); // Default 5 jika tidak ada input

    return Inertia::render('Users/Index', [
      'users' => User::with('roles')
        ->whereDoesntHave('roles', fn($query) => $query->where('name', 'Admin'))
        ->paginate($perPage)
        ->through(fn($user) => $user->only(['id', 'full_name', 'email']) + [
            'roles' => $user->roles->pluck('name')
          ]),
      'filters' => [
        'per_page' => $perPage, // Simpan nilai agar tidak hilang saat reload
      ],
      'notification' => session()->pull('notification'),
    ]);
  }


  public function store(Request $request)
  {
    User::create([
      ...$request->only(['name', 'email']),
      'password' => Hash::make($request->password),
    ]);

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Created',
      'message' => 'User has been successfully created.',
    ]);
  }

  public function create()
  {
    return Inertia::render('Users/Create');
  }

  public function edit(User $user)
  {
    return Inertia::render('Users/Edit', [
      'user' => $user->only(['id', 'full_name', 'email']),
      'notification' => session()->pull('notification'),
    ]);
  }

  public function update(Request $request, User $user)
  {
    $user->update([
      ...$request->only(['name', 'email']),
      'password' => $request->filled('password') ? Hash::make($request->password) : $user->password,
    ]);

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Updated',
      'message' => 'User information has been successfully updated.',
    ]);
  }

  public function destroy(User $user)
  {
    $user->delete();

    return to_route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Deleted',
      'message' => 'User has been successfully deleted.',
    ]);
  }
}
