<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Payout;
use App\Models\Setting;
use App\Models\Member;
use App\Models\Chit;
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
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status', '=', 'active')->get(['gpname as label', 'id as key']);
        $member = Member::where('status', '=', 'active')->get(['mname as label', 'id as key']);
        $amount = Chit::where('status', '=', 'active')->get(['tgpvalue as label', 'id as key']);
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payouts/CreatePayout', [
            'record' => new Payout(),
            'user' => $user,
            'month' => $month,
            'status' => $status,
            'group' => $group,
            'member' => $member,
            'amount' => $amount,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $requestData = $request->all();
        $data = Payout::create($requestData);
        $data->save();

        return to_route('payout.index');
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
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status', '=', 'active')->get(['gpname as label', 'id as key']);
        $member = Member::where('status', '=', 'active')->get(['mname as label', 'id as key']);
        $amount = Chit::where('status', '=', 'active')->get(['tgpvalue as label', 'id as key']);
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payouts/CreatePayout', [
            'user' => $user,
            'month' => $month,
            'status' => $status,
            'group' => $group,
            'member' => $member,
            'amount' => $amount,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payout $payout, $id)
    {
        $payout = Payout::find($id);
        $requestData = $request->all();
        $updated = $payout->update($requestData);
        return to_route('payout.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payout $payout, $id)
    {
        Payout::find($id)->delete();
        return to_route('payout.index');
    }
}
