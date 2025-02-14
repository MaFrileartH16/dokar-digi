<?php

namespace App\Policies;

use App\Models\Role;
use App\Models\User;

class RolePolicy
{
  public function viewAny(User $user): bool
  {
    return $user->hasRole('Admin');
  }

  public function view(User $user, Role $model): bool
  {
    return $user->hasRole('Admin');
  }

  public function create(User $user): bool
  {
    return $user->hasRole('Admin');
  }

  public function update(User $user, Role $model): bool
  {
    return $user->hasRole('Admin');
  }

  public function delete(User $user, Role $model): bool
  {
    return $user->hasRole('Admin');
  }
}
