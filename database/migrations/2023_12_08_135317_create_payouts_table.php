<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    //  group: "",
    //     month: "",
    //     member: "",
    //     phone: "",
    //     email: "",
    //     paidon: "",
    //     amtopay: "",
    //     paidamount: "",
    //     remaining: "",
    //     status: "",
    //     otherdetails: "",
    public function up(): void
    {
        Schema::create('payouts', function (Blueprint $table) {
            $table->id();
            $table->string('group')->nullable();
            $table->string('month')->nullable();
            $table->string('member')->nullable();
            $table->bigInteger('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('paidon')->nullable();
            $table->bigInteger('amtopay')->nullable();
            $table->bigInteger('paidamount')->nullable();
            $table->bigInteger('remaining')->nullable();
            $table->string('status')->nullable();
            $table->string('otherdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payouts');
    }
};
