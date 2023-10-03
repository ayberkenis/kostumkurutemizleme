<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Appointments;
use App\Models\Products;
use Illuminate\Support\Str;

class CustomerController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $data = [
            'user' => $user,
            'randezveous' => $user -> randezveous,
        ];
        return Inertia::render('Customer/Home', $data);
    }
    public function createAppointment(Request $request) {
        $randezveous = new Appointments();
        $randezveous->user_id = Auth::user()->id;
        $randezveous->id = Str::uuid();
        $randezveous->date = $request->date;
        $randezveous->hour = $request->hour;
        $randezveous->is_permitted = false;
        // Split the "products" string into an array using commas
        $productsString = $request->input('products');
        $productsArray = explode(',', $productsString);

        // Encode the array as JSON and save it to the "products" field
        $randezveous->products = json_encode($productsArray, JSON_UNESCAPED_UNICODE);

        $randezveous->save();
        return Inertia::location('customer');
    }
    public function seeAllAppointments(Request $request)
    {
        // Assuming you want to create a rendezvous for the authenticated user
        $user = Auth::user(); // Get the authenticated user
        $randezveous = Appointments::all();
        $products = Products::all();
        $data = [
            'user' => $user,
            'products' => $products,
        ];
        return Inertia::render('Customer/Appointments/AppointmentIndex', $data);
    }

    public function AppointmentsHistory()
    {
        $user = Auth::user();
        $data = [
            'user' => $user,
            'randezveous' => $user -> randezveous,

        ];
        return Inertia::render('Customer/Appointments/AppointmentHistory', $data);
    }
    
    public function singleAppointment (Request $request) {
        $randezveous = Appointments::where('id', $request->uuid)->first();
        $user = Auth::user();
        $data = [
            'user' => $user,
            'randezveous' => $randezveous,
            
        ];
        return Inertia::render('Customer/Appointments/SingleAppointment', $data);
    }

    public function ratingsPage (Request $request)
    {
        $user = Auth::user();
        $data = [
            'user' => $user,
            'randezveous' => $user -> randezveous,

        ];
        return Inertia::render('Customer/Ratings/RatingsIndex', $data);
    }


}
