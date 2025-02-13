<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
  /**
   * The current password being used by the factory.
   */
  protected static ?string $password;

  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $firstName = fake()->firstName();
    $lastName = fake()->lastName();

    $name = $firstName . ' ' . $lastName;
    $email = str_replace(' ', '.', $name) . '@dokar-digi.id';

    return [
      'name' => $name,
      'email' => $email,
      'password' => static::$password ??= Hash::make($email),
    ];
  }
}
