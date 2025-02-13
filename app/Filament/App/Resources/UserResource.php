<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\UserResource\Pages;
use App\Filament\App\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Spatie\Permission\Models\Role;

class UserResource extends Resource
{
  protected static ?string $model = User::class;

  protected static ?string $navigationIcon = 'heroicon-o-users';

  protected static ?string $activeNavigationIcon = 'heroicon-s-users';
  protected static ?string $navigationLabel = 'Pengguna';

  protected static ?string $navigationBadgeTooltip = 'The number of users';

  public static function getNavigationBadge(): ?string
  {
    return static::getModel()::count();
  }

  public static function form(Form $form): Form
  {
    return $form
      ->schema([
        TextInput::make('name')
          ->label('Nama Lengkap')
          ->placeholder('Masukan nama lengkap')
          ->autocapitalize('words')
          ->prefixIcon('heroicon-o-user')
          ->autofocus()
          ->rules(['required', 'max:255'])
          ->validationMessages([
            'required' => 'Nama lengkap tidak boleh kosong.',
            'max' => 'Nama lengkap maksimal 255 karakter.'
          ])
          ->helperText('Masukkan nama lengkap Anda.'),

        // Validasi email menggunakan regex, tanpa menggunakan aturan 'email'
        TextInput::make('email')
          ->prefixIcon('heroicon-o-envelope')
          ->label('Alamat Surel')
          ->placeholder('Masukan alamat surel')
          ->rules([
            'required',
            'max:255',
            'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'
          ])  // Validasi regex untuk email
          ->validationMessages([
            'required' => 'Alamat surel tidak boleh kosong.',
            'max' => 'Alamat surel maksimal 255 karakter.',
            'regex' => 'Alamat surel tidak valid.'
          ])
          ->helperText('Masukkan alamat email yang valid.'),

        Select::make('role_id')
          ->label('Peran')
          ->prefixIcon('heroicon-o-user')
          ->rules(['required'])
          ->options(function () {
            return Role::where('name', '!=', 'Admin')
              ->pluck('name', 'name')
              ->toArray();
          })
          ->native(false)
          ->searchable()
          ->validationMessages([
            'required' => 'Peran harus dipilih.'
          ])
          ->helperText('Pilih role yang sesuai.'),

        // Validasi password dengan aturan ketat
        TextInput::make('password')
          ->revealable()
          ->prefixIcon('heroicon-o-lock-closed')
          ->label('Kata Sandi')
          ->placeholder('Masukan kata sandi')
          ->password()
          ->rules([
            'required',
//            'min:8',  // Minimal 8 karakter
//            'regex:/[A-Z]/',  // Harus mengandung huruf besar
//            'regex:/[a-z]/',  // Harus mengandung huruf kecil
//            'regex:/[0-9]/',  // Harus mengandung angka
//            'regex:/[@$!%*?&]/'  // Harus mengandung karakter khusus
          ])  // Validasi ketat untuk password
          ->validationMessages([
            'required' => 'Kata sandi harus diisi.',
//            'min' => 'Kata sandi minimal 8 karakter.',
//            'regex' => 'Kata sandi harus mengandung setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.'
          ])
//          ->helperText('Password harus memiliki minimal 8 karakter, satu huruf besar, satu angka, dan satu karakter khusus.'),
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->columns([
        Tables\Columns\TextColumn::make('name')
          ->searchable(),
        Tables\Columns\TextColumn::make('email')
          ->searchable(),
        Tables\Columns\TextColumn::make('created_at')
          ->dateTime()
          ->sortable()
          ->toggleable(isToggledHiddenByDefault: true),
        Tables\Columns\TextColumn::make('updated_at')
          ->dateTime()
          ->sortable()
          ->toggleable(isToggledHiddenByDefault: true),
      ])
      ->filters([
        Tables\Filters\TrashedFilter::make(),
      ])
      ->actions([
        Tables\Actions\ViewAction::make(),
        Tables\Actions\EditAction::make(),
      ])
      ->bulkActions([
        Tables\Actions\BulkActionGroup::make([
          Tables\Actions\DeleteBulkAction::make(),
          Tables\Actions\ForceDeleteBulkAction::make(),
          Tables\Actions\RestoreBulkAction::make(),
        ]),
      ]);
  }

  public static function getRelations(): array
  {
    return [
      //
    ];
  }

  public static function getPages(): array
  {
    return [
      'index' => Pages\ListUsers::route('/'),
      'create' => Pages\CreateUser::route('/create'),
      'view' => Pages\ViewUser::route('/{record}'),
      'edit' => Pages\EditUser::route('/{record}/edit'),
    ];
  }

  public static function getEloquentQuery(): Builder
  {
    return parent::getEloquentQuery()
      ->withoutGlobalScopes([
        SoftDeletingScope::class,
      ]);
  }
}
