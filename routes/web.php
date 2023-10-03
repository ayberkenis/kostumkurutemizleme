<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RandevuController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\IndexController;
use App\Http\Models\Settings;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

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

Route::get('/', [IndexController::class, 'index']) -> name('index');

Route::group(['middleware' => 'auth'], function() {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [ProfileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [ProfileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [ProfileController::class, 'deleteProfile'])->name('profileDelete');

    Route::group(['prefix' => 'customer', 'middleware' => 'customer'], function () {
        Route::get('/', [CustomerController::class, 'index'])->name('customer');
        Route::get('/gecmis-randevular', [CustomerController::class, 'AppointmentsHistory'])->name('gecmis-randevular');
        Route::get('/randevu/{uuid}', [CustomerController::class, 'singleAppointment'])->name('singleRandevu');
        Route::get('/yeni-randevu', [CustomerController::class, 'seeAllAppointments'])->name('yeni-randevu');
        Route::post('/yeniRandevu', [CustomerController::class, 'createAppointment'])->name('yeniRandevu');
        Route::get('/degerlendirmeler', [CustomerController::class, 'ratingsPage'])->name('degerlendirmeler');
    
        // Add more customer-specific routes here
    });
    
    Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
        Route::get('/', [AdminController::class, 'index'])->name('admin');
        
        // Add more admin-specific routes here
        Route::get('/urun-olustur', [AdminController::class, 'createProductPage'])->name('urun-olustur');
        Route::post('/urunOlustur', [AdminController::class, 'createProduct'])->name('urun-olustur-api');
        Route::get('/urunler', [AdminController::class, 'getProducts'])->name('urunler');
        Route::put('/urunGuncelle', [ProductsController::class, 'updateProduct'])->name('urunGuncelle');
        Route::post('/urunGorseliYukle', [ProductsController::class, 'uploadProductImage'])->name('urunGorseliYukle');
        Route::get('/ayarlar', [AdminController::class, 'settingsPage'])->name('ayarlar');
        Route::get('/randevular', [AdminController::class, 'AppointmentsIndex'])->name('randevular');
        Route::put('randevuDuzenle/{id}', [AdminController::class, 'AppointmentEdit']) -> name('randevuEdit');
        Route::get('/bildirimler', [AdminController::class, 'NotificationsPage'])->name('bildirimler');
        Route::get('/musteriler', [AdminController::class, 'allUsersPage'])->name('musteriler');
        Route::get('/yeni-musteri', [AdminController::class, 'newCustomerPage'])->name('yeniMusteri');
        Route::post('/musteriOlustur', [AdminController::class, 'createCustomer'])->name('musteriOlustur');
        Route::put('/ayarlar/kaydet', [AdminController::class, 'saveSettings'])->name('ayarlarKaydet');
        Route::get('/musteri/{uuid}', [AdminController::class, 'singleCustomer'])->name('musteri');
        Route::get('/musteri/{uuid}/randevular', [AdminController::class, 'singleCustomerRandevular'])->name('musteriRandevular');
        Route::get('/musteri/{uuid}/bildirimler', [AdminController::class, 'singleCustomerBildirimler'])->name('musteriBildirimler');
        Route::get('/musteri/{uuid}/ayarlar', [AdminController::class, 'singleCustomerAyarlar'])->name('musteriAyarlar');
        // You can add more admin routes here
    });
});
