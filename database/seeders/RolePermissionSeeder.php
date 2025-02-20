<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        Role::where('name', 'Admin')->first()?->givePermissionTo(Permission::all());

        Role::whereIn('name', ['Officer', 'Approver'])->get()
            ->each(fn($role) => $role->givePermissionTo(['Lihat Daftar Dokumen', 'Lihat Rincian Dokumen']));
    }
}
