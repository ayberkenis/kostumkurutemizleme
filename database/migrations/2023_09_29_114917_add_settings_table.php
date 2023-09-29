<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('key')->unique();
            $table->string('value')->nullable();
            $table->timestamps();
        });

        // Add built-in settings
        $settings = [
            ['id'=> Str::uuid()->toString(), 'key' => 'site_name', 'value' => 'Kostüm Kuru Temizleme'],
            ['id'=> Str::uuid()->toString(), 'key' => 'site_owner', 'value' => 'İbrahim Gönül'],
            ['id'=> Str::uuid()->toString(), 'key' => 'shop_location', 'value' => 'Beşiktaş/İstanbul'],
            ['id'=> Str::uuid()->toString(), 'key' => 'sms_number', 'value' => '+90 212 260 60 63'],
            ['id'=> Str::uuid()->toString(), 'key' => 'email_address', 'value' => 'iletisim@kostumkurutemizleme.com.tr'],
            ['id'=> Str::uuid()->toString(), 'key' => 'facebook_url', 'value' => 'https://www.facebook.com/'],
            ['id'=> Str::uuid()->toString(), 'key' => 'instagram_url', 'value' => 'https://www.instagram.com/'],
            ['id'=> Str::uuid()->toString(), 'key' => 'twitter_url', 'value' => 'https://twitter.com/'],
            ['id'=> Str::uuid()->toString(), 'key' => 'youtube_url', 'value' => 'https://www.youtube.com/'],
            ['id'=> Str::uuid()->toString(), 'key' => 'linkedin_url', 'value' => 'https://www.linkedin.com/'],
            ['id'=> Str::uuid()->toString(), 'key' => 'google_maps_location_url', 'value' => null],
            ['id'=> Str::uuid()->toString(), 'key' => 'show_product_price_on_randevu_page', 'value' => 'false'],
            ['id'=> Str::uuid()->toString(), 'key' => 'smtp_mail_server', 'value' => null],
            ['id'=> Str::uuid()->toString(), 'key' => 'show_availability_on_home_page', 'value' => 'true'],
            ['id'=> Str::uuid()->toString(), 'key' => 'working_hours_headers', 'value' => 'Pazartesi - Cumartesi / 08:00 - 19:30'],
            ['id'=> Str::uuid()->toString(), 'key' => 'working_hours_home', 'value' => 'Pazar hariç her gün / 08:00 - 19:30'],
            ['id'=> Str::uuid()->toString(), 'key' => 'shop_address', 'value' => 'Türkali, Nüzhetiye Caddesi, No 16/A
            Beşiktaş/İstanbul'],
            ['id'=> Str::uuid()->toString(), 'key' => 'enable_registration', 'value' => 'true'],
            ['id'=> Str::uuid()->toString(), 'key' => 'enable_randevu', 'value' => 'true'],
            ['id'=> Str::uuid()->toString(), 'key' => 'privacy_policy_content', 'value' => null],
            ['id'=> Str::uuid()->toString(), 'key' => 'terms_of_service_content', 'value'=> null],
            ['id'=> Str::uuid()->toString(), 'key' => 'enable_notifications', 'value' => 'true'],
            ['id'=> Str::uuid()->toString(), 'key' => 'enable_ratings', 'value' => 'true'],
            ['id'=> Str::uuid()->toString(), 'key' => 'notification_options', 'value' => '{}'],

            // Add more settings here as needed
        ];

        DB::table('settings')->insert($settings);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
