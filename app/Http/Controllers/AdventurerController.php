<?php

namespace App\Http\Controllers;

use App\Adventurer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdventurerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {

        // dd($request->header('php-auth-user'));
        //Get User Email from request header
        // $email = ($request->server()['HTTP_PHP_AUTH_USER']);
        // $email = $request->server()['PHP_AUTH_USER'];
        $email = $request->header('php-auth-user');
        //Find user based on email
        $user = User::where('email', '=', $email)->get()[0];
        //Find all adventurers associated with user
        $adventurers = Adventurer::where('user_id', $user['id'])->get();

        return $adventurers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        //Get User Email from request header
        // $email = ($request->server()['HTTP_PHP_AUTH_USER']);
        // $email = $request->server()['PHP_AUTH_USER'];
        $email = $request->header('php-auth-user');
        //Find user based on email
        $user = User::where('email', '=', $email)->get()[0];

        $adventurer = new Adventurer;
        $adventurer['name'] = $request->name;
        $adventurer['stamina'] = $request->stamina;
        $adventurer['defense'] = $request->defense;
        $adventurer['attack'] = $request->attack;
        $adventurer['monsters_defeated'] = 0;
        $adventurer['treasure'] = 0;
        $adventurer['active'] = false;
        $adventurer['user_id'] = $user['id'];
        $adventurer->save();

        return ($adventurer);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function show(Adventurer $adventurer)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function edit(Adventurer $adventurer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Adventurer $adventurer)
    {
        
    }

    public function activate($id) {
        $adventurer = Adventurer::find($id);
        $adventurer['active'] = true;

        $adventurer->save();
        
        return $adventurer;
    }

    public function deactivate($id) {
        $adventurer = Adventurer::find($id);
        $adventurer['active'] = false;
        
         $adventurer->save();
        
        return $adventurer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Adventurer  $adventurer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $adventurer = Adventurer::find($id);
        $adventurer->delete();
        return ($adventurer);
    }
}
