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
      'title' => 'Peran Dibuat',
      'message' => 'Peran telah berhasil dibuat.',
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
      'title' => 'Peran Diperbarui',
      'message' => 'Peran telah berhasil diperbarui.',
    ]);
  }

  public function destroy(Role $role)
  {
    // Prevent deleting the 'Admin' role
    if ($role->name === 'Admin') {
      return to_route('roles.index')->with('notification', [
        'status' => 'error',
        'title' => 'Tidak Bisa Menghapus Peran',
        'message' => 'Peran "Admin" tidak bisa dihapus.',
      ]);
    }

    $role->delete();

    return to_route('roles.index')->with('notification', [
      'status' => 'success',
      'title' => 'Peran Dihapus',
      'message' => 'Peran telah berhasil dihapus.',
    ]);
  }

  public function change()
  {
    
  }
}
