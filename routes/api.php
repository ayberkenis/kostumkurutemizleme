<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Models\Products;

use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Define your authenticated API routes here


Route::put('/shop/status', [AdminController::class, 'updateShopStatus'])->name('shopStatus.update');

Route::post('/sendContactMail', [MailController::class, 'sendContactMail'])->name('sendContactMail');