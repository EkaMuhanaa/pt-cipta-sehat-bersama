<?php

namespace App\Filament\Resources\Settings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;

class SettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('key')
                    ->required(),
                Select::make('type')
                    ->options([
                        'text' => 'Teks',
                        'image' => 'Gambar',
                    ])
                    ->default('text')
                    ->required()
                    ->live(),
                Textarea::make('value')
                    ->default(null)
                    ->visible(fn (Get $get): bool => $get('type') !== 'image')
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->disk('public')
                    ->directory('settings')
                    ->visibility('public')
                    ->image()
                    ->required(fn (Get $get): bool => $get('type') === 'image')
                    ->visible(fn (Get $get): bool => $get('type') === 'image')
                    ->columnSpanFull(),
                TextInput::make('description')
                    ->default(null),
            ]);
    }
}
