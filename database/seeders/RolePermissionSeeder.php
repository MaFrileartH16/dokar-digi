<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
  public function run(): void
  {
    Role::where('name', 'Admin')->first()->givePermissionTo(Permission::all());
    Role::where('name', 'Pustakawan')->first()->givePermissionTo(Permission::where('name', 'like', '%dokumen%')->get());
  }
}
