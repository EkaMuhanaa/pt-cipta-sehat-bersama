<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Service;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    public function getArticles(Request $request)
    {
        $articles = Article::with('author')
            ->where('is_published', true)
            ->orderByDesc('created_at')
            ->get()
            ->each(fn (Article $article) => $article->image_url = $this->imageUrl($article->getRawOriginal('image_url')));
        return response()->json([
            'success' => true,
            'data' => $articles
        ]);
    }

    public function getArticleBySlug($slug)
    {
        $article = Article::with('author')
            ->where('slug', $slug)
            ->where('is_published', true)
            ->first();
        if (!$article) {
            return response()->json(['success' => false, 'message' => 'Article not found'], 404);
        }
        $article->image_url = $this->imageUrl($article->getRawOriginal('image_url'));

        return response()->json([
            'success' => true,
            'data' => $article
        ]);
    }

    public function getServices()
    {
        $services = Service::orderBy('order', 'asc')->get();
        return response()->json([
            'success' => true,
            'data' => $services
        ]);
    }

    public function getSettings()
    {
        $settings = Setting::all();
        $formattedSettings = [];
        foreach ($settings as $setting) {
            $formattedSettings[$setting->key] = $setting->type === 'image'
                ? $this->imageUrl($setting->image_path)
                : $setting->value;
        }
        return response()->json([
            'success' => true,
            'data' => $formattedSettings
        ]);
    }

    private function imageUrl(?string $path): ?string
    {
        if (! $path || Str::startsWith($path, ['http://', 'https://', '/'])) {
            return $path;
        }

        if (Storage::disk('public')->exists($path)) {
            return '/storage/'.ltrim($path, '/');
        }

        return Storage::disk('local')->exists($path)
            ? Storage::disk('local')->temporaryUrl($path, now()->addMinutes(5))
            : null;
    }
}
