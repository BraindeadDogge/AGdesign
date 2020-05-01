<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Web;

class WebController extends Controller
{
    public function all() {
        return Web::all();
    }
    public function add(Request $request) {
        $web = new Web;
        $web->name = $request->name;
        $web->mail = $request->mail;
        $web->text = $request->text;
        return $web->save();
    }
}
