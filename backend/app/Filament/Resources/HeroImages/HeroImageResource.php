<?php

namespace App\Filament\Resources\HeroImages;

use App\Filament\Resources\HeroImages\Pages\ListHeroImages;
use App\Models\Setting;
use BackedEnum;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class HeroImageResource extends Resource
{
    protected static ?string $model = Setting::class;

    protected static ?string $slug = 'hero-images';

    protected static ?string $navigationLabel = 'Gambar Hero';

    protected static ?string $modelLabel = 'gambar hero';

    protected static ?string $pluralModelLabel = 'gambar hero';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $recordTitleAttribute = 'key';

    public const SLOTS = [
        'home_hero_1' => 'Beranda - Slide 1',
        'home_hero_2' => 'Beranda - Slide 2',
        'home_hero_3' => 'Beranda - Slide 3',
        'home_hero_4' => 'Beranda - Slide 4',
        'service_hero' => 'Layanan',
        'about_hero' => 'Tentang Kami',
        'edu_hero' => 'Edukasi K3',
        'article_hero' => 'Artikel',
    ];

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('key')
                    ->label('Halaman / Slot Hero')
                    ->options(fn (?Setting $record): array => array_diff_key(
                        self::SLOTS,
                        array_flip(Setting::whereIn('key', array_keys(self::SLOTS))
                            ->when($record, fn (Builder $query) => $query->whereKeyNot($record->getKey()))
                            ->pluck('key')
                            ->all()),
                    ))
                    ->unique(table: Setting::class, column: 'key', ignoreRecord: true)
                    ->disabledOn('edit')
                    ->required(),
                FileUpload::make('image_path')
                    ->label('Gambar')
                    ->disk('public')
                    ->directory('settings')
                    ->visibility('public')
                    ->image()
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                    ->maxSize(5120)
                    ->imagePreviewHeight('250')
                    ->openable()
                    ->required(),
                TextInput::make('description')
                    ->label('Keterangan')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image_path')
                    ->label('Preview')
                    ->disk('public')
                    ->visibility('public')
                    ->imageWidth(160)
                    ->imageHeight(90),
                TextColumn::make('key')
                    ->label('Halaman / Slot Hero')
                    ->formatStateUsing(fn (string $state): string => self::SLOTS[$state] ?? $state),
                TextColumn::make('description')
                    ->label('Keterangan'),
                TextColumn::make('updated_at')
                    ->label('Terakhir Diubah')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('key')
            ->recordActions([
                EditAction::make()
                    ->label('Edit')
                    ->mutateDataUsing(fn (array $data): array => [
                        ...$data,
                        'type' => 'image',
                        'value' => null,
                    ])
                    ->databaseTransaction(),
                DeleteAction::make()
                    ->label('Hapus')
                    ->databaseTransaction(),
            ])
            ->emptyStateHeading('Belum ada gambar hero')
            ->emptyStateDescription('Upload gambar untuk mengganti background hero halaman umum.');
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->whereIn('key', array_keys(self::SLOTS));
    }

    public static function getPages(): array
    {
        return [
            'index' => ListHeroImages::route('/'),
        ];
    }
}
