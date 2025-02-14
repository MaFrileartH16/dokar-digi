<?php

namespace App\Models;

use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements FilamentUser
{
  use HasFactory, Notifiable, SoftDeletes, HasRoles, HasUlids;

  protected $fillable = [
    'name',
    'email',
    'password',
  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  public function canAccessPanel(Panel $panel): bool
  {
    return true;
  }

  public function setEmailAttribute($value): void
  {
    $this->attributes['email'] = strtolower($value);
  }

  public function setNameAttribute($value): void
  {
    $this->attributes['name'] = ucwords(strtolower($value));
  }

  public function setPasswordAttribute($value): void
  {
    $this->attributes['password'] = Hash::make($value);
  }

  protected function casts(): array
  {
    return [
      'password' => 'hashed',
    ];
  }
}
