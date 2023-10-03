<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;


class Appointments extends Model
{
    use HasFactory;
    protected $primaryKey = 'id'; // Specify the name of your primary key column
    public $incrementing = false; // Set to false since it's not auto-incrementing

    protected $table = 'randezveous';
    protected $fillable = [
        'user_id',
        'id',
        'date',
        'hour',
        'description',
        'is_permitted',
        'products',
    ];
    protected $casts = [
        'products' => 'array',
    ];
    public function todaysAppointments()
    {
        return $this->whereDate('date', today())->get();
    }
    
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function store(Request $request)
{
    // Validate the form data (you can use Laravel validation rules)
    $validatedData = $request->validate([
        'date' => 'required|date',
        'time' => 'required',
        'items' => 'required',
    ]);

    // Check if there is an existing randevous on the same date and time
    $existingAppointment = Appointments::where('date', $validatedData['date'])
        ->where('time', $validatedData['time'])
        ->first();

    if ($existingAppointment) {
        // An appointment already exists for this date and time, handle the error
        return back()->withErrors(['time' => 'Bu tarih ve saatte randevu mevcut.']);
    }

    // Create a new randevous record
    Appointments::create($validatedData);

    // Redirect to a success page or do any other required actions
    return redirect()->route('customer')->with('success', 'Randevu başarıyla oluşturuldu.');
}

}
