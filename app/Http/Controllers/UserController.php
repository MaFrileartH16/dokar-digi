<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
  public function index()
  {
    $users = User::all();
    return Inertia::render('Users/Index', [
      'users' => $users,
      'notification' => session()->pull('notification'),
    ]);
  }

  public function store(Request $request)
  {
    User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);

    return redirect()->route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Created',
      'message' => 'User has been successfully created.',
    ]);
  }

  public function create()
  {
    return Inertia::render('Users/Create');
  }

  public function edit($id)
  {
    $user = User::findOrFail($id);
    return Inertia::render('Users/Edit', [
      'user' => $user,
      'notification' => session()->pull('notification'),
    ]);
  }

  public function update(Request $request, $id)
  {
    $user = User::findOrFail($id);
    $user->name = $request->name;
    $user->email = $request->email;
    if ($request->password) {
      $user->password = Hash::make($request->password);
    }
    $user->save();

    return redirect()->route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Updated',
      'message' => 'User information has been successfully updated.',
    ]);
  }

  public function destroy($id)
  {
    $user = User::findOrFail($id);
    $user->delete();

    return redirect()->route('users.index')->with('notification', [
      'status' => 'success',
      'title' => 'User Deleted',
      'message' => 'User has been successfully deleted.',
    ]);
  }
}
