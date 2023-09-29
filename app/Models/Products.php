<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $primaryKey = 'id'; // Specify the name of your primary key column
    public $incrementing = false; // Set to false since it's not auto-incrementing

    protected $table = 'products';
    protected $fillable = [
        'id',
        'name',
        'description',
        'price',
        'image',
        'is_active',
        'cleaning_duration',
        'is_discount',
        'discount_price',
        'discount_start_date',
        'discount_end_date',
    ];

    public function createProduct(Request $request)
    {
        $validatedData = $request->validate(
            [
                'name' => 'required',
                'description' => 'required',
                'price' => 'required',
                'image' => 'required',
                'is_active' => 'required',
                'cleaning_duration' => 'required',
                'is_discount' => 'required',
                'discount_price' => 'required',
                'discount_start_date' => 'required',
                'discount_end_date' => 'required',
            ]);

            $existingProduct = Products::where('name', $validatedData['name'])
                ->where('description', $validatedData['description'])
                ->where('price', $validatedData['price'])
                ->where('image', $validatedData['image'])
                ->where('is_active', $validatedData['is_active'])
                ->where('cleaning_duration', $validatedData['cleaning_duration'])
                ->where('is_discount', $validatedData['is_discount'])
                ->where('discount_price', $validatedData['discount_price'])
                ->where('discount_start_date', $validatedData['discount_start_date'])
                ->where('discount_end_date', $validatedData['discount_end_date'])
                ->first();

            if ($existingProduct) {
                // An appointment already exists for this date and time, handle the error
                return back()->withErrors(['time' => 'Bu özellikler ile ürün mevcut.']);
            }

        Products::create($validatedData);
        return redirect()->route('admin')->with('success', 'Ürün başarıyla oluşturuldu.');
    }

}
