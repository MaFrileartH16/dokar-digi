<?php

namespace App\Filament\App\Pages;

use Filament\Pages\Page;

class Dashboard extends Page
{
  protected static ?string $navigationIcon = 'heroicon-o-home';

  protected static string $view = 'filament.app.pages.dashboard';

  protected static ?string $title = 'Dasbor';
  
}
