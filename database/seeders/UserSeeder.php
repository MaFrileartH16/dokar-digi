<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  public function run(): void
  {
    $admin = User::create(['full_name' => 'Admin', 'username' => 'admin', 'email' => 'admin@dokar-digi.id', 'password' => 'admin']);
    $admin->assignRole('Admin');

    User::factory(16)->create()->each(function ($user) {
      $user->assignRole(Role::where('name', '!=', 'Admin')->pluck('name')->random());
    });
  }
}
