<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
  public function index()
  {
    return Inertia::render('Roles/Index', [
      'roles' => Role::where('name', '!=', 'Admin')->get(),
      'notification' => session()->pull('notification'),
    ]);
  }


  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|unique:roles,name|max:255',
    ]);

    Role::create([
      'name' => $request->name,
    ]);

    return to_route('roles.index')->with('notification', [
      'status' => 'success',
      'title' => 'Role Created',
      'message' => 'The role has been successfully created.',
    ]);
  }

  public function create()
  {
    return Inertia::render('Roles/Create', [
      'notification' => session()->pull('notification'),
    ]);
  }

  public function edit(Role $role)
  {
    return Inertia::render('Roles/Edit', [
      'role' => $role->toArray(),
      'notification' => session()->pull('notification'),
    ]);
  }

  public function update(Request $request, Role $role)
  {
    $request->validate([
      'name' => 'required|unique:roles,name,' . $role->id . '|max:255', // Ensure name is unique, but allow current role to be the same
    ]);

    $role->update([
      'name' => $request->name,
    ]);

    return to_route('roles.index')->with('notification', [
      'status' => 'success',
      'title' => 'Role Updated',
      'message' => 'The role has been successfully updated.',
    ]);
  }

  public function destroy(Role $role)
  {
    // Prevent deleting the 'Admin' role
    if ($role->name === 'Admin') {
      return to_route('roles.index')->with('notification', [
        'status' => 'error',
        'title' => 'Cannot Delete Role',
        'message' => 'The "Admin" role cannot be deleted.',
      ]);
    }

    $role->delete();

    return to_route('roles.index')->with('notification', [
      'status' => 'success',
      'title' => 'Role Deleted',
      'message' => 'The role has been successfully deleted.',
    ]);
  }
}
