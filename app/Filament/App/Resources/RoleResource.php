<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\RoleResource\Pages\CreateRole;
use App\Filament\App\Resources\RoleResource\Pages\EditRole;
use App\Filament\App\Resources\RoleResource\Pages\ListRoles;
use App\Models\Role;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use stdClass;

// for $rowLoop parameter type

class RoleResource extends Resource
{
  protected static ?string $model = Role::class;
  protected static ?string $navigationLabel = 'Peran';
  protected static ?string $recordTitleAttribute = 'name';
  protected static ?string $navigationIcon = 'heroicon-o-key';
  protected static ?string $activeNavigationIcon = 'heroicon-s-key';
  protected static ?string $navigationBadgeTooltip = 'The number of roles';

  public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
  {
    return auth()->user()?->hasRole('Admin') ? $record->name : '';
  }

  public static function getGlobalSearchEloquentQuery(): Builder
  {
    $query = parent::getGlobalSearchEloquentQuery();
    return auth()->user()?->hasRole('Admin') ? $query : $query->whereRaw('1 = 0');
  }

  public static function form(Form $form): Form
  {
    return $form->schema([]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->modifyQueryUsing(function (Builder $query) {
        return $query->where('name', '!=', 'Admin');
      })
      ->columns([
        TextColumn::make('id')
          ->getStateUsing(fn(stdClass $rowLoop) => $rowLoop->iteration)
          ->label('No'),
        TextColumn::make('name')->label('Nama')->searchable()->sortable(),
      ])
      ->filters([])
      ->actions([EditAction::make(), DeleteAction::make()])
      ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
  }


  public static function getRelations(): array
  {
    return [];
  }

  public static function getPages(): array
  {
    return [
      'index' => ListRoles::route('/'),
      'create' => CreateRole::route('/create'),
      'edit' => EditRole::route('/{record}/edit'),
    ];
  }

  public static function getNavigationBadge(): ?string
  {
    return static::getModel()::where('name', '!=', 'Admin')->count();
  }
}
