<?php

namespace Tests\Feature;

use App\Models\Setting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SettingApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_settings_api_returns_text_and_public_image_urls(): void
    {
        Storage::fake('public');
        Storage::disk('public')->put('settings/hero.jpg', 'image');

        Setting::create([
            'key' => 'company_name',
            'value' => 'PT Cipta Sehat Bersama',
        ]);
        Setting::create([
            'key' => 'home_hero_1',
            'type' => 'image',
            'image_path' => 'settings/hero.jpg',
        ]);

        $this->getJson('/api/settings')
            ->assertOk()
            ->assertJsonPath('data.company_name', 'PT Cipta Sehat Bersama')
            ->assertJsonPath('data.home_hero_1', '/storage/settings/hero.jpg');
    }
}
