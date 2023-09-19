<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
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
        
        return Inertia::render('Profile', $data);
    }

    public function updateProfilePhoto(Request $request)
    {
        if($request->hasFile('photo')){
            $photo = $request->file('photo');
            $filename = auth()->user()->id . '.' . $photo->getClientOriginalExtension();
            if($photo->getClientOriginalExtension() !== 'jpg'){

                return inertia('Profile', [
                    'photoMessage' => 'Only upload .jpg files'
                ]);
             }

            $this->deleteOldImage();

            Storage::putFileAs('public/profilePhotos', $photo, $filename );
            $request->user()->update([
                'photo_name' => $filename
            ]);

            return redirect()->route('profile');
        }
    }

    protected function deleteOldImage()
    {
        if(auth()->user()->photo_name)  {
          Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
        }
    }

    public function deleteProfilePhoto(Request $request)
    {

        if(auth()->user()->photo_name){

            Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
            $request->user()->update([
                'photo_name' => null
            ]);
        }

        return back(303);
    }
    public function deleteProfile(Request $request)
    {
        $request->validate([
            'password' => 'required|string|password',
        ]);

        $user = User::find(Auth::user()->id);

        if(Auth::user()->photo_name){
            Storage::delete('public/profilePhotos/'.auth()->user()->photo_name );
            $request->user()->update([
                'photo_name' => null
            ]);
        }

        Auth::logout();

        $user->delete();

        return redirect('/');
    }
}
