<?php

namespace App\Http\Controllers;

use App\Mail\contactus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    //

    public function contactUsForm(Request $request)
    {
        $email  = 'info@semaso.de';
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
            'telephone' => 'required'
        ]);

        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'bodyMessage' => $request->message,
            'telephone' => $request->telephone
        );

        Mail::to($email)->send(new contactus($data['name'], $data['email'], $data['telephone'], $data['bodyMessage']));



        return response()->json($data, 200);

    }
}
