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
        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->text('message');
            $table->boolean('is_active');
            $table->string('type');
            $table->boolean('is_sent');
            $table->timestamp('sent_at')->nullable();
            $table->string('medium');
            $table->timestamps();
        });
        $notifications = [
            ['id' => Str::uuid(), 'name'=> 'Randevu Oluşturuldu', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz oluşturulmuştur. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu Güncellendi', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz güncellenmiştir. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu İptal Edildi', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz iptal edilmiştir. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu Bugün', 'message'=> 'Merhaba {user_name}, bugün {hour} saatine randevunuz bulunmaktadır. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu Onaylandı', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz onaylanmıştır. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu Reddedildi', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz reddedilmiştir. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            ['id' => Str::uuid(), 'name'=> 'Randevu Hatırlatma', 'message'=> 'Merhaba {user_name}, {date} tarihinde {time} saatine randevunuz bulunmaktadır. Randevu detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active'=> true, 'type'=> 'randevu', 'is_sent'=> false, 'sent_at'=> null, 'medium' => 'email, sms, whatsapp', 'created_at'=> now(), 'updated_at'=> now()],
            
            ['id' => Str::uuid(), 'name' => 'Üyelik Oluşturuldu', 'message' => 'Merhaba {user_name}, üyeliğiniz oluşturulmuştur. Üyelik detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active' => true, 'type' => 'user', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],
            ['id' => Str::uuid(), 'name' => 'Üyelik Güncellendi', 'message' => 'Merhaba {user_name}, üyeliğiniz güncellenmiştir. Üyelik detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active' => true, 'type' => 'user', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],
            ['id' => Str::uuid(), 'name' => 'Üyelik Silindi', 'message' => 'Merhaba {user_name}, üyeliğiniz silinmiştir. Üyelik detaylarına aşağıdaki linkten ulaşabilirsiniz. {link}',
            'is_active' => true, 'type' => 'user', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],

            ['id' => Str::uuid(), 'name' => 'Karşılama Mesajı (Whatsapp)', 'message' => 'Merhaba, size nasıl yardımcı olabiliriz?', 
            'is_active' => true, 'type' => 'user', 'is_sent' => false, 'sent_at' => null, 'medium' => 'whatsapp', 'created_at' => now(), 'updated_at' => now()],
            
            ['id' => Str::uuid(), 'name' => 'Üyelik İçin Teşekkür Mesajı', 'message' => 'Merhaba {user_name}, bizimle üye olduğunuz için teşekkür ederiz! Hizmetlerimizden yararlanmaya başlamak için aşağıdaki linki ziyaret edebilirsiniz. {link}',
            'is_active' => true, 'type' => 'user', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],
            ['id' => Str::uuid(), 'name' => 'Geribildirim İsteği', 'message' => 'Merhaba {user_name}, sizden birkaç dakikanızı ayırarak deneyiminiz hakkında geribildirim almak isteriz. Aşağıdaki linki kullanarak anketimize katılabilirsiniz. Teşekkür ederiz!',
            'is_active' => true, 'type' => 'feedback', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],
            ['id' => Str::uuid(), 'name' => 'Yeni Şube Açılışı', 'message' => 'Merhaba {user_name}, yeni bir şube açtık! Size daha yakınız. Adres ve detaylar için aşağıdaki linki kullanabilirsiniz. Sizi bekliyoruz!',
            'is_active' => true, 'type' => 'marketing', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email', 'created_at' => now(), 'updated_at' => now()],

            ['id' => Str::uuid(), 'name' => 'Ürün Temizlenme Tamamlanma', 'message' => 'Merhaba {user_name}, teslim ettiğiniz ürünlerin tamamının temizlenmesi tamamlanmıştır. Ürünlerinizi teslim almak için şubemize gelebilirsiniz.',
            'is_active' => true, 'type' => 'marketing', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email, sms, whatsapp', 'created_at' => now(), 'updated_at' => now()],

            ['id' => Str::uuid(), 'name' => 'Ürün Temizlenme tamamlanmasına 1 saat sonra var', 'message' => 'Merhaba {user_name}, teslim ettiğiniz ürünlerin temizlenmesi yaklaşık 1 saat sonra tamamlanacaktır. Ürünlerinizi teslim almak için şubemize gelebilirsiniz.',
            'is_active' => true, 'type' => 'marketing', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email, sms, whatsapp', 'created_at' => now(), 'updated_at' => now()],

            ['id' => Str::uuid(), 'name' => 'Ürün Teslim Alındı (Şirket)', 'message' => 'Merhaba {user_name}, {teslim_alan} tarafından teslim ettiğiniz ürünler teslim alınmıştır. Ürünlerinizin temizlenmesi için çalışmaya başladık. Ürünlerinizin temizlenmesi tamamlandığında size haber vereceğiz. Ürünlerin son durumunu {link} adresinden takip edebilirsiniz.',
            'is_active' => true, 'type' => 'marketing', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email, sms, whatsapp', 'created_at' => now(), 'updated_at' => now()],

            ['id' => Str::uuid(), 'name' => 'Ürün Teslim Alındı (Müşteri)', 'message' => 'Merhaba {user_name}, {teslim_alan_musteri} tarafından teslim alındı. Bizi tercih ettiğiniz için teşekkürler.',
            'is_active' => true, 'type' => 'marketing', 'is_sent' => false, 'sent_at' => null, 'medium' => 'email, sms, whatsapp', 'created_at' => now(), 'updated_at' => now()],

        ];
        
        DB::table('notifications')->insert($notifications);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
