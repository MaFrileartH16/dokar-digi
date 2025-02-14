<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
  public function run(): void
  {
    $adminRole = Role::where('name', 'Admin')->first();

    $permissions = Permission::whereIn('name', [
      'create user',
      'read user',
      'update user',
      'delete user',
    ])->get();

    foreach ($permissions as $permission) {
      $adminRole->givePermissionTo($permission);
    }
  }
}
