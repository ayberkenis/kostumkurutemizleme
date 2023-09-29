<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RandevuController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], function() {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [ProfileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [ProfileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [ProfileController::class, 'deleteProfile'])->name('profileDelete');

    Route::group(['prefix' => 'customer', 'middleware' => 'customer'], function () {
        Route::get('/', [CustomerController::class, 'index'])->name('customer');
        Route::get('/gecmis-randevular', [CustomerController::class, 'randezveousHistory'])->name('gecmis-randevular');
        Route::get('/randevu/{uuid}', [CustomerController::class, 'singleRandevu'])->name('singleRandevu');
        Route::get('/yeni-randevu', [CustomerController::class, 'seeAllRendezveous'])->name('yeni-randevu');
        Route::post('/yeniRandevu', [CustomerController::class, 'createRandevu'])->name('yeniRandevu');
    
        // Add more customer-specific routes here
    });
    
    Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
        Route::get('/', [AdminController::class, 'index'])->name('admin');
        
        // Add more admin-specific routes here
        Route::get('/urun-olustur', [AdminController::class, 'createProductPage'])->name('urun-olustur');
        Route::post('/urunOlustur', [AdminController::class, 'createProduct'])->name('urun-olustur');
        Route::get('/urunler', [AdminController::class, 'getProducts'])->name('urunler');
        Route::put('/urunGuncelle', [ProductsController::class, 'updateProduct'])->name('urunGuncelle');
        Route::post('/urunGorseliYukle', [ProductsController::class, 'uploadProductImage'])->name('urunGorseliYukle');
        Route::get('/ayarlar', [AdminController::class, 'settingsPage'])->name('ayarlar');
        // You can add more admin routes here
    });
});
