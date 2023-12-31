<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Payment;
use App\Models\Setting;
use App\Models\Member;
use App\Models\Chit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Payments/Paymentlist');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $status = Setting::where('type', '=', 'status',) -> where('status', '=','active') -> get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status','=','active')->get(['gpname as label', 'id as key']);
        $member = Member::where('status', '=', 'active') -> get(['mname as label', 'id as key']);
        $amount = Chit::where('status','=','active')->get(['tgpvalue as label', 'id as key']);
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payments/CreatePayment', [
            'record' => new Payment(),
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        $user = Auth::user();
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payments/CreatePayment', [
            'user' => $user,
            'month' => $month,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
