<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RolePermissionController extends Controller
{
  public function give(Role $role, Request $request)
  {
    // Assign the permissions to the role
    $role->syncPermissions($request->permissions);

//    broadcast(new PermissionsAssigned($role));

    // Redirect with a success message
    return to_route('roles.permissions.index', $role)->with('notification', [
      'status' => 'success',
      'title' => "Berhasil Beri Izin",
      'message' => 'Izin telah berhasil diberikan kepada peran "' . $role->name . '".',
    ]);
  }
}
