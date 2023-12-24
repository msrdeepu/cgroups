<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// mname: "",
// gname: "",
// contactnum: "",
// email: "",
// payoutexpmonth: "",
// reference: "",
// referencecontact: "",
// groupnum: "",
// grouptotalvalue: "",
// groupmonthlyvalue: "",
// sdate: "",
// edate: "",
// tmonths: "",
// status: "",
// maddress: "",
// otherdetails: "",

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->text('mname')->nullable();
            $table->text('gname')->nullable();
            $table->bigInteger('contactnum')->nullable();
            $table->text('email')->nullable();
            $table->text('payoutexpmonth')->nullable();
            $table->text('reference')->nullable();
            $table->bigInteger('referencecontact')->nullable();
            $table->bigInteger('groupnum')->nullable();
            $table->bigInteger('grouptotalvalue')->nullable();
            $table->bigInteger('groupmonthlyvalue')->nullable();
            $table->bigInteger('tmonths')->nullable();
            $table->text('sdate')->nullable();
            $table->text('edate')->nullable();
            $table->text('status')->nullable();
            $table->text('maddress')->nullable();
            $table->text('otherdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
