<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'type',
        'value',
        'image_path',
        'description',
    ];

    protected static function booted(): void
    {
        static::updated(function (Setting $setting): void {
            $oldImagePath = $setting->getOriginal('image_path');

            if ($oldImagePath !== $setting->image_path) {
                static::deleteImageAfterCommit($oldImagePath);
            }
        });

        static::deleted(fn (Setting $setting) => static::deleteImageAfterCommit($setting->image_path));
    }

    private static function deleteImageAfterCommit(?string $path): void
    {
        if ($path && dirname(str_replace('\\', '/', $path)) === 'settings') {
            DB::afterCommit(fn () => Storage::disk('public')->delete($path));
        }
    }
}
