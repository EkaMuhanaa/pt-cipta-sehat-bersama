<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ArticleApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_articles_api_only_returns_published_articles(): void
    {
        Storage::fake('public');
        Storage::disk('public')->put('articles/image.jpg', 'image');
        $author = User::factory()->create();

        Article::create([
            'title' => 'Published article',
            'slug' => 'published-article',
            'content' => 'Content',
            'image_url' => 'articles/image.jpg',
            'is_published' => true,
            'author_id' => $author->id,
        ]);

        Article::create([
            'title' => 'Draft article',
            'slug' => 'draft-article',
            'content' => 'Content',
            'is_published' => false,
            'author_id' => $author->id,
        ]);

        $this->getJson('/api/articles')
            ->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.slug', 'published-article')
            ->assertJsonPath('data.0.image_url', '/storage/articles/image.jpg')
            ->assertJsonPath('data.0.is_published', true);
    }
}
