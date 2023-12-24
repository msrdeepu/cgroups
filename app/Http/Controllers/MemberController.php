<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Member;
use App\Models\Chit;
use App\Models\Setting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Member::get(['*', 'id as key']);
        $members = Member::get(['id','mname', 'gname', 'contactnum','email','payoutexpmonth','reference', 'referencecontact', 'groupnum', 'grouptotalvalue', 'groupmonthlyvalue', 'tmonths', 'sdate', 'edate', 'status', 'maddress', 'otherdetails']);
        return Inertia::render('Members/Memberlist', [
            'memberList' => $members,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        $status = Setting::where('type', '=', 'status',) -> where('status', '=','active') -> get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status','=','active')->get(['gpname as label', 'id as key']);
        return Inertia::render('Members/CreateMember',[
            'record' => new Member(),
            'group' => $group,
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
        $data= Member::create($requestData);
        $data->save();
        return to_route('members.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Member $member)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Member $member, $id)
    {
        $user = Auth::user();
        $member= Member::find($id);
        $members = Member::get(['id','mname', 'gname', 'contactnum','email','payoutexpmonth','reference', 'referencecontact', 'groupnum', 'grouptotalvalue', 'groupmonthlyvalue', 'tmonths', 'sdate', 'edate', 'status', 'maddress', 'otherdetails']);
        $month = Setting::where('type','=', 'month', )->where('status','=','active')->get(['name AS label', 'value', 'id AS key']);
        $status = Setting::where('type', '=', 'status',) -> where('status', '=','active') -> get(['name as label', 'value', 'id as key']);
        $group = Chit::where('status','=','active')->get(['gpname as label', 'id as key']);
        return Inertia::render('Members/CreateMember',[
            'record' => $member,
            'group' => $group,
            'user' => $user,
            'month' => $month,
            'status' => $status,
            'memberList' => $members,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Member $member, $id)
    {
        $member = Member::find($id);
        $requestData = $request -> all();
        $updated = $member -> update($requestData);
        return to_route('members.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Member $member, $id)
    {
        $member = Member::find($id);
        $member->delete();
    }
}
