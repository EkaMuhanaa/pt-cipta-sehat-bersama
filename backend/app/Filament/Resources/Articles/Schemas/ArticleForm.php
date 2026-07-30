<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ArticleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('excerpt')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('category')
                    ->default(null),
                FileUpload::make('image_url')
                    ->disk('public')
                    ->directory('articles')
                    ->visibility('public')
                    ->image(),
                Toggle::make('is_published')
                    ->required(),
                TextInput::make('author_id')
                    ->required()
                    ->numeric(),
            ]);
    }
}
