<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
  use HasFactory, Notifiable, SoftDeletes, HasRoles, HasUlids;

  protected $fillable = [
    'full_name',
    'username',
    'email',
    'password',
  ];

  protected $hidden = [
    'password',
    'remember_token',
  ];

  public function setEmailAttribute($value): void
  {
    $this->attributes['email'] = strtolower($value);
  }

  public function setUsernameAttribute($value): void
  {
    $this->attributes['username'] = strtolower($value);
  }

  public function setFullNameAttribute($value): void
  {
    $this->attributes['full_name'] = ucwords(strtolower($value));
  }

  public function setPasswordAttribute($value): void
  {
    $this->attributes['password'] = Hash::make($value);
  }

  public function socialAccounts(): HasMany
  {
    return $this->hasMany(SocialAccount::class);
  }


  protected function casts(): array
  {
    return [
      'password' => 'hashed',
    ];
  }
}
