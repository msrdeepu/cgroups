<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Chit;
use Illuminate\Http\Request;

class ChitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Chits/Chitlist');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Chits/CreateChit');
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
    public function show(Chit $chit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chit $chit)
    {
        return Inertia::render('Chits/CreateChit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chit $chit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chit $chit)
    {
        //
    }
}
