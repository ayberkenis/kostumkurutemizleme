<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    use HasFactory;
    protected $table = 'notifications';

    protected $primaryKey = 'id'; // Specify the name of your primary key column
    public $incrementing = false; // Set to false since it's not auto-incrementing

    protected $fillable = [
        'id',
        'name',
        'message',
        'price',
        'is_active',
        'type',
        'medium',
        'is_sent',
        'sent_at',
        'created_at',
        'updated_at',
    ];

    public static function getNotifications()
    {
        $notifications = Notifications::all();
        $notificationsArray = [];
        foreach ($notifications as $notification) {
            $notificationsArray[$notification->key] = $notification->value;
        }
        return $notificationsArray;
    }


}
