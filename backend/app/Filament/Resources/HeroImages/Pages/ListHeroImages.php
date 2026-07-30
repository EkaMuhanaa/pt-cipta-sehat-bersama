<?php

namespace App\Filament\Resources\HeroImages\Pages;

use App\Filament\Resources\HeroImages\HeroImageResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListHeroImages extends ListRecords
{
    protected static string $resource = HeroImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->label('Upload Gambar Hero')
                ->createAnother(false)
                ->databaseTransaction()
                ->mutateDataUsing(fn (array $data): array => [
                    ...$data,
                    'type' => 'image',
                    'value' => null,
                ]),
        ];
    }
}
