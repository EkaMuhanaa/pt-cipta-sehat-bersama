<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SettingImageFileTest extends TestCase
{
    use DatabaseMigrations;

    public function test_admin_can_open_the_hero_image_cms(): void
    {
        $this->actingAs(User::factory()->create(['email' => 'admin@ciptasehat.com']))
            ->get('/admin/hero-images')
            ->assertOk()
            ->assertSee('Gambar Hero');

        $this->actingAs(User::factory()->create())
            ->get('/admin/hero-images')
            ->assertForbidden();
    }

    public function test_replacing_and_deleting_a_hero_image_removes_its_files(): void
    {
        Storage::fake('public');
        Storage::disk('public')->put('settings/old.jpg', 'old');
        Storage::disk('public')->put('settings/new.jpg', 'new');
        Storage::disk('public')->put('articles/keep.jpg', 'keep');

        $setting = Setting::create([
            'key' => 'home_hero_1',
            'type' => 'image',
            'image_path' => 'settings/old.jpg',
        ]);

        $setting->update(['image_path' => 'settings/new.jpg']);

        Storage::disk('public')->assertMissing('settings/old.jpg');
        Storage::disk('public')->assertExists('settings/new.jpg');

        $setting->delete();

        Storage::disk('public')->assertMissing('settings/new.jpg');
        Storage::disk('public')->assertExists('articles/keep.jpg');
    }
}
