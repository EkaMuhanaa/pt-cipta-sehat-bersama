<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function () {
    Route::get('/articles', [ApiController::class, 'getArticles']);
    Route::get('/articles/{slug}', [ApiController::class, 'getArticleBySlug']);
    Route::get('/services', [ApiController::class, 'getServices']);
    Route::get('/settings', [ApiController::class, 'getSettings']);
});
