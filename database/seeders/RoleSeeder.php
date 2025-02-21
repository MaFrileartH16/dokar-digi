<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
  public function run(): void
  {
    collect(['Admin', 'Petugas', 'Penyetuju Mutu', 'Penyetuju Laporan & Surat'])
      ->each(fn($role) => Role::create(['name' => $role]));
  }
}
