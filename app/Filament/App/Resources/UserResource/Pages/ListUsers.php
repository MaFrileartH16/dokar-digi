<?php

namespace App\Filament\App\Resources\UserResource\Pages;

use App\Filament\App\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends ListRecords
{
  protected static string $resource = UserResource::class;

  protected static ?string $title = 'Daftar Pengguna';

//  public function getTabs(): array
//  {
//    return [
//      'all' => Tab::make(),
//      'active' => Tab::make()
//        ->modifyQueryUsing(fn(Builder $query) => $query->where('active', true)),
//      'inactive' => Tab::make()
//        ->modifyQueryUsing(fn(Builder $query) => $query->where('active', false)),
//    ];
//  }

  protected function getHeaderActions(): array
  {
    return [
      Actions\CreateAction::make(),
    ];
  }
}
