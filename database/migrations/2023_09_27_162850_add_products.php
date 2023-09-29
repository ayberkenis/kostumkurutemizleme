<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name') -> unique();
            $table->string('description');
            $table->integer('price');
            $table->string('image');
            $table->boolean('is_active') -> default(true);
            $table->integer('cleaning_duration');
            $table->boolean('is_discount') -> default(false);
            $table->integer('discount_price') -> nullable();
            $table->string('discount_start_date') -> nullable();
            $table->string('discount_end_date') -> nullable();
            $table->integer('discount_percentage') -> nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
