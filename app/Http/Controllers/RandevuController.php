<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RandevuController extends Controller
{
    public function index()
    {
        // Assuming you want to pass some data to the Inertia view
        $user = Auth::user(); // Get the authenticated user

        // You can customize this data as per your requirements
        $data = [
            'user' => $user,
            'otherData' => 'Some other data',
        ];

        return Inertia::render('randevu', $data);
    }

    public function createRendezveous(Request $request)
    {
        // Assuming you want to create a rendezvous for the authenticated user
        $user = Auth::user(); // Get the authenticated user

        // Add validation rules here for the request data
        $request->validate([
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            // Add more validation rules as needed
        ]);

        // Assuming you have a Rendezvous model and want to create a new rendezvous
        $rendezvous = new Rendezvous([
            'date' => $request->input('date'),
            'location' => $request->input('location'),
            // Add more fields as needed
        ]);

        // Associate the rendezvous with the authenticated user
        $user->rendezvous()->save($rendezvous);

        // Redirect to a success page or return a response as needed
        return redirect()->route('randevu.index')->with('success', 'Rendezvous created successfully.');
    }
}
