<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Randezveous;
use App\Models\Products;
use App\Models\Settings;
use App\Models\Notifications;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

use Inertia\Inertia;
;

class AdminController extends Controller
{
    public function index()
{
    // Assuming you want to pass some data to the Inertia view
    $user = Auth::user();
    $totalUsers = User::getTotalUsers(); // Get the total number of users
    $randezveousWithUser = Randezveous::with('user')->get(); // today's randezveous only with user
    $settings = Settings::all();
        
    // You can customize this data as per your requirements
    $data = [
        'user' => $user,
        'serverStatus' => 'online',
        'totalUsers' => User::count(), // Ensure that 'totalUsers' is included in the data array
        'randezveous' => $randezveousWithUser,
        'totalProducts' => Products::count(),
        'totalRandezveous' => Randezveous::count(),
        'settings' => $settings,
    ];
    
    // Check if the user has admin role, and if not, redirect to '/home'

    return Inertia::render('Admin/index', $data);


}

    public function randevuEdit (Request $request)
    {
        $randevu = Randezveous::find($request->id);
        $randevu->date = $request->date;
        $randevu->hour = $request->hour;
        $randevu->is_permitted = $request->is_permitted;
        $randevu->save();
        return json_encode($randevu);
    }

    public function getProducts(Request $request) {
        $products = Products::all();
        $user = Auth::user();
        $data = [
            'user' => $user,
            'products' => $products,
        ];
        return Inertia::render('Admin/Products/allProducts', $data);
    }



    public function createProductPage(Request $request)
    {
        $user = Auth::user();
        $products = Products::all();
        $data = [
            'user' => $user,
            'products' => $products,
        ];
        return Inertia::render('Admin/Products/createProduct', $data);
    }

    public function createProduct(Request $request) {
        $product = new Products();
        $product->id = Str::uuid();
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->is_active = $request->is_active;
        $product->cleaning_duration = $request->cleaning_duration;
        $product->is_discount = $request->is_discount;
        $product->discount_price = $request->discount_price;
        $product->discount_start_date = $request->discount_start_date;
        $product->discount_end_date = $request->discount_end_date;
    
        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/products', $imageName);
            $product->image = $imageName;
        }
    
        $product->save();
        return Inertia::location('/');
    }
    
    public function settingsPage(request $request)
    {
        $user = Auth::user();
        $settings = Settings::all();
        $data = [
            'user' => $user,
            'settings' => $settings,
            'test' => 'test',
        ];
        return Inertia::render('Admin/Settings/index', $data);
    }
    public function randevularPage(request $request)
    {
        $user = Auth::user();
        $randevular = Randezveous::all();
        $randevularUser = Randezveous::with('user')->get(); // today's randezveous only with user
        $products = Products::all();
        $data = [
            'user' => $user,
            'randevular' => $randevular,
            'randevularUser' => $randevularUser,
            'products' => $products,
        ];
        return Inertia::render('Admin/Randezveous/editRandevu', $data);
    }

    public function bildirimlerPage(request $request)
    {
        $user = Auth::user();
        $notifications = Notifications::all();
        $data = [
            'user' => $user,
            'notifications' => $notifications,
        ];
        return Inertia::render('Admin/Notifications/index', $data);
    }

    public function userStats(Request $request) 
    {
        $user = Auth::user(); // Get the authenticated user
        $totalUsers = User::getTotalUsers(); // Get the total number of users
    
        $data = [
            'user' => $user,
            'totalUsers' => $totalUsers, // Ensure that 'totalUsers' is included in the data array
            'users' => User::all(),
        ];
    
        return Inertia::render('Admin', $data);
    }

    public function createCustomer(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;

        // Hash the password before saving it to the database
        $user->password = Hash::make($request->password);

        // Split the "roles" string into an array using commas
        $rolesString = $request->input('roles');
        $rolesArray = explode(',', $rolesString);

        // Encode the array as JSON and save it to the "roles" field
        $user->roles = json_encode($rolesArray, JSON_UNESCAPED_UNICODE);

        $user->save();

        return Inertia::location('Admin');
    }
    
    public function newCustomerPage(request $request)
    {
        $user = Auth::user();
        $data = [
            'user' => $user,
        ];
        return Inertia::render('Admin/Users/newCustomer', $data);
    }

    public function allUsersPage(request $request)
    {
        $user = Auth::user();
        $users = User::all();
        $data = [
            'user' => $user,
            'users' => $users,
        ];
        return Inertia::render('Admin/Users/users', $data);
    }


}
