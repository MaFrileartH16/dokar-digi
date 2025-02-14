<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
  public function run(): void
  {
    collect(['Admin', 'Kepala Perpustakaan', 'Gugus Mutu', 'Pustakawan'])
      ->each(fn($role) => Role::create(['name' => $role]));
  }
}
