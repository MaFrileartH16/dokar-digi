<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
  public function run(): void
  {
    $permissions = [
      // User Permissions
      'buat pengguna', 'lihat daftar pengguna', 'lihat rincian pengguna', 'ubah pengguna', 'hapus pengguna',

      // Role Permissions
      'buat peran', 'lihat daftar peran', 'lihat rincian peran', 'ubah peran', 'hapus peran',

      // Document Permissions
      'buat dokumen', 'lihat daftar dokumen', 'lihat rincian dokumen', 'ubah dokumen', 'hapus dokumen',
    ];

    foreach ($permissions as $permission) {
      Permission::create(['name' => $permission]);
    }
  }
}
