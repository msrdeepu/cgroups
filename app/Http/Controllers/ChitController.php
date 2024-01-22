<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Chit;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ChitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Chit::get(['*', 'id as key']);
        $chits = Chit::get(['id', 'gpname', 'stmonth', 'enmonth', 'tgpvalue', 'status', 'tmembers', 'mpamount', 'tinstalments', 'othdetails']);
        return Inertia::render('Chits/Chitlist', [
            'chitList' => $chits,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        return Inertia::render('Chits/CreateChit', [
            'record' => new Chit(),
            'user' => $user,
            'month' => $month,
            'status' => $status,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $requestData = $request->all();
        $data = Chit::create($requestData);
        $data->save();
        return to_route('group.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Chit $chit, $id)
    {
        $user = Auth::user();
        $chits = Chit::get(['id', 'gpname', 'stmonth', 'enmonth', 'status', 'tgpvalue', 'tmembers', 'mpamount', 'tinstalments', 'othdetails']);
        $chit = Chit::find($id);
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Chits/Cdetails', [
            'user' => $user,
            'month' => $month,
            'chitList' => $chits,
            'record' => $chit,
            'status' => $status,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chit $chit, $id)
    {
        $user = Auth::user();
        $chits = Chit::get(['id', 'gpname', 'stmonth', 'enmonth', 'status', 'tgpvalue', 'tmembers', 'mpamount', 'tinstalments', 'othdetails']);
        $chit = Chit::find($id);
        $status = Setting::where('type', '=', 'status',)->where('status', '=', 'active')->get(['name as label', 'value', 'id as key']);
        $month = Setting::where('type', '=', 'month',)->where('status', '=', 'active')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Chits/CreateChit', [
            'user' => $user,
            'month' => $month,
            'chitList' => $chits,
            'record' => $chit,
            'status' => $status,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chit $chit, $id)
    {
        $chit = Chit::find($id);
        $requestData = $request->all();
        $updated = $chit->update($requestData);
        return to_route('group.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chit $chit, $id)
    {
        $chit = Chit::find($id);
        $chit->delete();
    }
}
