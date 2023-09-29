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
        Schema::create('randezveous', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users'); // Change 'user_id' to the desired foreign key name
            $table->string('date');
            $table->string('hour') ; 
            $table->string('description') -> nullable();
            $table->boolean('is_permitted') -> default(false);
            $table->json('products') -> default('[]');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('randezveous');
    }
};
