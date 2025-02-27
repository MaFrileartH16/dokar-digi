<?php

namespace App\Http\Requests\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'identity' => ['required', 'string'],
      'password' => ['required', 'string'],
    ];
  }

  /**
   * Attempt to authenticate the request's credentials.
   *
   * @throws ValidationException
   */
  public function authenticate(): void
  {
    $this->ensureIsNotRateLimited();

    $identity = $this->input('identity'); // Mengambil input identity
    $password = $this->input('password');

    // Menentukan apakah input berupa email atau username
    $credentials = filter_var($identity, FILTER_VALIDATE_EMAIL)
      ? ['email' => $identity, 'password' => $password]
      : ['username' => $identity, 'password' => $password];

    if (!Auth::attempt($credentials)) {
      RateLimiter::hit($this->throttleKey());

      throw ValidationException::withMessages([
        'identity' => trans('auth.failed'),
      ]);
    }

    RateLimiter::clear($this->throttleKey());
  }


  /**
   * Ensure the login request is not rate limited.
   *
   * @throws ValidationException
   */
  public function ensureIsNotRateLimited(): void
  {
    if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
      return;
    }

    event(new Lockout($this));

    $seconds = RateLimiter::availableIn($this->throttleKey());

    throw ValidationException::withMessages([
      'email' => trans('auth.throttle', [
        'seconds' => $seconds,
        'minutes' => ceil($seconds / 60),
      ]),
    ]);
  }

  /**
   * Get the rate limiting throttle key for the request.
   */
  public function throttleKey(): string
  {
    return Str::transliterate(Str::lower($this->string('email')) . '|' . $this->ip());
  }
}
