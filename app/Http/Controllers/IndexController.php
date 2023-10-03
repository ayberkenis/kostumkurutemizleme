<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Settings;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class IndexController extends Controller
{
    public function index()
    {
        $settings = Settings::all();
        $data = [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            '_settings' => 'development',
            'settings' => $settings,
            'test' => false,
            'title' => Settings::where('key', 'site_name')->value('value'),
        ];
        return Inertia::render('Welcome', $data);
    }
}
