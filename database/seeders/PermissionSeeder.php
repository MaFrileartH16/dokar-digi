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
      'buat pengguna',
      'lihat daftar pengguna',
      'lihat rincian pengguna',
      'ubah pengguna',
      'hapus pengguna',

      // Role Permissions
      'buat peran',
      'lihat daftar peran',
      'lihat rincian peran',
      'ubah peran',
      'hapus peran',

      // Document Permissions
      'buat dokumen mutu',
      'buat dokumen surat',
      'buat dokumen laporan',
      'lihat daftar dokumen',
      'lihat rincian dokumen',
      'ubah dokumen mutu',
      'ubah dokumen surat',
      'ubah dokumen laporan',
      'hapus dokumen mutu',
      'hapus dokumen surat',
      'hapus dokumen laporan',
      'setujui dokumen mutu',
      'setujui dokumen surat',
      'setujui dokumen laporan',
    ];

    foreach ($permissions as $permission) {
      Permission::create(['name' => $permission]);
    }
  }
}
