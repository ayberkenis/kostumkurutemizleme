<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $primaryKey = 'id'; // Specify the name of your primary key column
    public $incrementing = false; // Set to false since it's not auto-incrementing

    protected $table = 'settings';
    


    public static function getSettings()
    {
        $settings = Settings::all();
        $settingsArray = [];
        foreach ($settings as $setting) {
            $settingsArray[$setting->key] = $setting->value;
        }
        return $settingsArray;
    }


}
