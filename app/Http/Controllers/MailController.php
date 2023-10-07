<?php

namespace App\Http\Controllers;

ini_set('max_execution_time', 300);

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class MailController extends Controller
{
    public function sendContactMail(Request $request)
    {
        $data = [
            'name' => $request->get('name'),
            'surname' => $request->get('surname'),
            'email' => $request->get('email'),
            'messages' => $request->get('message')
        ];

        // Import the $request variable into the closure function
        Mail::send('emails.email_template', $data, function ($message) use ($request) {
            $message->to($request->get('email'), $request->get('name'))->subject('Kostüm Kuru Temizleme | İletişim Formu');
            $message->from('contact@codingbase.com.tr', 'Kostüm Kuru Temizleme');
        });

        return response()->json(['message' => 'success'], 200);
    }

    public function sendNotificationMail(Request $request) 
    {
        
    }
}
