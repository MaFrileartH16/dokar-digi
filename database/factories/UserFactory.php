<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
  protected static ?string $password;

  public function definition(): array
  {
    $full_name = fake()->firstName() . ' ' . fake()->lastName();
    $username = strtolower(str_replace(' ', '.', $full_name));
    $email = strtolower(str_replace(' ', '.', $full_name)) . '@dokar-digi.id';

    return [
      'full_name' => $full_name,
      'username' => $username,
      'email' => $email,
      'password' => $username,
    ];
  }
}
