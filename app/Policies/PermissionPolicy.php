<?php

namespace App\Policies;

use App\Models\Role;
use App\Models\User;

class PermissionPolicy
{
  /**
   * Determine if the user can view any role (only Admin).
   */
  public function viewAny(User $user): bool
  {
    return $user->hasRole('Admin');
  }

  /**
   * Determine if the user can view a specific role (only Admin).
   */
  public function view(User $user, Role $role): bool
  {
    return $user->hasRole('Admin');
  }

  /**
   * Determine if the user can create a role (only Admin).
   */
  public function create(User $user): bool
  {
    return $user->hasRole('Admin');
  }

  /**
   * Determine if the user can update a role (only Admin).
   */
  public function update(User $user, Role $role): bool
  {
    return $user->hasRole('Admin');
  }

  /**
   * Determine if the user can delete a role (only Admin).
   */
  public function delete(User $user, Role $role): bool
  {
    return $user->hasRole('Admin');
  }
}
