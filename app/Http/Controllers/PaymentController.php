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

        $payments = Payment::get(['id', 'groupname', 'monthname', 'membername', 'receivedon', 'actamount', 'paidamount', 'remainamount', 'receivedby', 'pstatus', 'remarks']);
        return Inertia::render('Payments/Paymentlist', [
            'payments' => $payments,
        ]);
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
        $requestData = $request->all();
        $data = Payment::create($requestData);
        $data->save();

        return to_route('payment.index');
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
    public function edit(Payment $payment, $id)
    {
        $user = Auth::user();
        $payment = Payment::find($id);
        $payments = Payment::get(['id', 'groupname', 'monthname', 'membername', 'receivedon', 'actamount', 'paidamount', 'remainamount', 'receivedby', 'pstatus', 'remarks']);
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status', '=', 'active')->get(['gpname as label', 'id as key']);
        $member = Member::where('status', '=', 'active')->get(['mname as label', 'id as key']);
        $amount = Chit::where('status', '=', 'active')->get(['tgpvalue as label', 'id as key']);
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Payments/CreatePayment', [
            'user' => $user,
            'month' => $month,
            'status' => $status,
            'group' => $group,
            'member' => $member,
            'amount' => $amount,
            'record' => $payment,
            'payments' => $payments,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $payment = Payment::find($id);
        $requestData = $request->all();
        $updated = $payment->update($requestData);
        return to_route('payment.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment, $id)
    {
        Payment::find($id)->delete();
        return to_route('payment.index');
    }
}
