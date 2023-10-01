<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;
use Laravel\Fortify\TwoFactorAuthenticatable;
class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'photo_name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    /**
     * check if user has role
     */

     public function isUserAdmin()
     {
         return $this->hasRole('admin');
     }

     public static function getTotalUsers()
    {
        return self::count();
    }
    public function roles() {
        return $this->belongsToMany(Role::class);
    }
    public function randezveous()
    {
        return $this->hasMany(Randezveous::class);
    }
    public function hasRole($roleName)
{
    $rolesArray = json_decode($this->roles, true);

    if (is_array($rolesArray)) {
        foreach ($rolesArray as $role) {
            if (isset($role['name']) && $role['name'] === $roleName) {
                return true;
            }
        }
    }

    return false;
}


    
    public function logRoles()
{
    Log::info('User roles for ' . $this->name . ': ' . implode(', ', $this->roles));
}


}
