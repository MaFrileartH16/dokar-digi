<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $rolesWithPermissions = [
            'Admin' => Permission::all()->pluck('name')->toArray(),
            'Petugas' => ['Lihat Daftar Dokumen', 'Lihat Rincian Dokumen'],
            'Penyetuju Mutu' => Permission::whereRaw("LOWER(name) LIKE '%mutu%'")->pluck('name')->toArray(),
            'Penyetuju Laporan & Surat' => Permission::whereRaw("LOWER(name) LIKE '%laporan%'")
                ->orWhereRaw("LOWER(name) LIKE '%surat%'")
                ->pluck('name')
                ->toArray(),
        ];

        foreach ($rolesWithPermissions as $role => $permissions) {
            $formattedPermissions = array_map(fn($p) => Str::title($p), $permissions);

            Role::where('name', $role)->first()?->givePermissionTo(
                array_merge(['Lihat Daftar Dokumen', 'Lihat Rincian Dokumen'], $formattedPermissions)
            );
        }
    }
}
