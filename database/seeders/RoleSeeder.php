<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
  public function run(): void
  {
    collect(['Admin', 'Officer', 'Approver'])
      ->each(fn($role) => Role::create(['name' => $role]));
  }
}
