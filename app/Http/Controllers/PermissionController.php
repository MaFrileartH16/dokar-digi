<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Inertia\Inertia;

class PermissionController extends Controller
{
  public function index(Role $role)
  {
    return Inertia::render('Permissions/Index', [
      'role' => $role->load('permissions'),
      'permissions' => Permission::all(),
      'notification' => session()->pull('notification'),
    ]);
  }
}
