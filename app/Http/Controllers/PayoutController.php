<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Payout;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Payouts/Payoutlist');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payouts/CreatePayout', [
            'record' => new Payout(),
            'user' => $user,
            'month' => $month,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Payout $payout)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payout $payout)
    {
        $user = Auth::user();
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payouts/CreatePayout', [
            'user' => $user,
            'month' => $month,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payout $payout)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payout $payout)
    {
        //
    }
}
