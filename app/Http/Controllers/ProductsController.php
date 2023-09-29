<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class ProductsController extends Controller
{
    

    public function createProduct(Request $request) {
        $product = new Products();
        $product->id = Str::uuid();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->is_active = $request->is_active;
        $product->cleaning_duration = $request->cleaning_duration;
        $product->is_discount = $request->is_discount;
        $product->discount_price = $request->discount_price;
        $product->discount_start_date = $request->discount_start_date;
        $product->discount_end_date = $request->discount_end_date;

        $product->save();
        return Inertia::location('/');
    }

 



    public function updateProduct (request $request)
    {
        $product = Products::where('id', $request->id)->first();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        if ($request->image) {
            $product->image = $request->image;
        }
        $product->is_active = $request->is_active;
        $product->cleaning_duration = $request->cleaning_duration;
        $product->is_discount = $request->is_discount;
        $product->discount_price = $request->discount_price;
        $product->discount_start_date = $request->discount_start_date;
        $product->discount_end_date = $request->discount_end_date;

        $product->save();
        return Inertia::location('admin');
    }
}
