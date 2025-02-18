<?php

namespace App\Events;

use App\Models\Role;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PermissionsAssigned implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $role;

  public function __construct(Role $role)
  {
    $this->role = $role;
  }

  public function broadcastOn()
  {
    // Broadcast to a public channel that all users can listen to
    return new Channel('permissions-updated');
  }

  public function broadcastWith()
  {
    // You can send relevant data, like the updated role and its permissions
    return [
      'role_name' => $this->role->name,
      'permissions' => $this->role->permissions->pluck('name'),
    ];
  }
}
