<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
  protected static ?string $password;

  public function definition(): array
  {
    $name = fake()->firstName() . ' ' . fake()->lastName();
    $email = strtolower(str_replace(' ', '.', $name)) . '@dokar-digi.id';

    return [
      'name' => $name,
      'email' => $email,
      'password' => $email,
    ];
  }
}
