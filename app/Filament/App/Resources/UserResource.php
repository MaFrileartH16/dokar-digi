<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\UserResource\Pages\{CreateUser, EditUser, ListUsers, ViewUser};
use App\Models\Role;
use App\Models\User;
use Filament\Forms\Components\{Select, TextInput};
use Filament\Forms\Form;
use Filament\GlobalSearch\Actions\Action;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use stdClass;

class UserResource extends Resource
{
  protected static ?string $model = User::class;
  protected static ?string $navigationIcon = 'heroicon-o-users';
  protected static ?string $activeNavigationIcon = 'heroicon-s-users';
  protected static ?string $navigationLabel = 'Pengguna';
  protected static ?string $navigationBadgeTooltip = 'The number of users';

  public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
  {
    return auth()->user()?->hasRole('Admin') && !$record->roles->pluck('name')->contains('Admin') ? $record->name : '';
  }

  public static function getGlobalSearchEloquentQuery(): Builder
  {
    $query = parent::getGlobalSearchEloquentQuery();
    return auth()->user()?->hasRole('Admin') ? $query->whereDoesntHave('roles', fn($query) => $query->where('name', 'Admin')) : $query->whereRaw('1 = 0');
  }

  public static function getGloballySearchableAttributes(): array
  {
    return ['name', 'email', 'roles.name'];
  }

  public static function getGlobalSearchResultActions(Model $record): array
  {
    return [Action::make('edit')->url(static::getUrl('edit', ['record' => $record]))];
  }

  public static function getGlobalSearchResultDetails(Model $record): array
  {
    return !$record->roles->pluck('name')->contains('Admin') ? [
      'Alamat Surel' => $record->email,
      'Peran' => $record->roles->isNotEmpty() ? $record->roles->first()->name : 'No Role',
    ] : [];
  }

  public static function getNavigationBadge(): ?string
  {
    return static::getModel()::whereDoesntHave('roles', fn($query) => $query->where('name', 'Admin'))->count();
  }

  public static function form(Form $form): Form
  {
    return $form->schema([
      TextInput::make('name')->label('Nama Lengkap')->placeholder('Masukan nama lengkap')->autocapitalize('words')->prefixIcon('heroicon-o-user')->autofocus()->rules(['required', 'max:255']),
      TextInput::make('email')->prefixIcon('heroicon-o-envelope')->label('Alamat Surel')->placeholder('Masukan alamat surel')->rules(['required', 'max:255', 'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/']),
      Select::make('role_id')->label('Peran')->prefixIcon('heroicon-o-user')->rules(['required'])->options(fn() => Role::where('name', '!=', 'Admin')->pluck('name', 'name')->toArray())->native(false)->searchable(),
      TextInput::make('password')->revealable()->prefixIcon('heroicon-o-lock-closed')->label('Kata Sandi')->placeholder('Masukan kata sandi')->password()->rules(['required']),
    ]);
  }

  public static function table(Table $table): Table
  {
    return $table->modifyQueryUsing(fn(Builder $query) => $query->whereDoesntHave('roles', fn($query) => $query->where('name', 'Admin')))
      ->columns([
        Tables\Columns\TextColumn::make('id')
          ->getStateUsing(fn(stdClass $rowLoop) => $rowLoop->iteration)
          ->label('No'),
        Tables\Columns\TextColumn::make('name')->label('Nama Lengkap')->searchable()->sortable(),
        Tables\Columns\TextColumn::make('email')->label('Alamat Surel')->searchable()->sortable(),
        Tables\Columns\TextColumn::make('role')->getStateUsing(fn($record) => $record->roles->isNotEmpty() ? $record->roles->pluck('name')->implode(', ') : 'No Role')->label('Peran'),
      ])
      ->filters([
        Tables\Filters\TrashedFilter::make(),
        SelectFilter::make('role')
          ->relationship('roles', 'name')
          ->label('Peran')
          ->options(fn() => Role::where('name', '!=', 'Admin')->pluck('name', 'name')->toArray())
      ], layout: FiltersLayout::AboveContentCollapsible)
      ->actions([
        Tables\Actions\EditAction::make(),
        Tables\Actions\DeleteAction::make()
      ])
      ->bulkActions([
        Tables\Actions\BulkActionGroup::make([Tables\Actions\DeleteBulkAction::make(), Tables\Actions\ForceDeleteBulkAction::make(), Tables\Actions\RestoreBulkAction::make()])
      ]);
  }

  public static function getRelations(): array
  {
    return [];
  }

  public static function getPages(): array
  {
    return [
      'index' => ListUsers::route('/'),
      'create' => CreateUser::route('/create'),
      'view' => ViewUser::route('/{record}'),
      'edit' => EditUser::route('/{record}/edit'),
    ];
  }

  public static function getEloquentQuery(): Builder
  {
    return parent::getEloquentQuery()->withoutGlobalScopes([SoftDeletingScope::class]);
  }
}
