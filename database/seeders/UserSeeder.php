<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Membuat Admin
    $admin = User::create([
      'name' => 'Admin',
      'email' => 'admin@dokar-digi.id',
      'password' => Hash::make('admin@dokar-digi.id'),
    ]);
    $admin->assignRole('Admin');

    // Membuat user lain dengan role acak
    $users = User::factory(16)->create();
    $roles = Role::where('name', '!=', 'Admin')->pluck('name')->toArray();  // Ambil semua role selain 'Admin'

    foreach ($users as $user) {
      // Assign role secara acak
      $randomRole = $roles[array_rand($roles)];
      $user->assignRole($randomRole);
    }
  }
}
