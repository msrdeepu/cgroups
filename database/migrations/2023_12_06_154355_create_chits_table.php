<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        // gpname: "",
// stmonth: "",
// enmonth: "",
// tgpvalue: "",
// tmembers: "",
// mpamount: "",
// tinstalments: "",
// othdetails: "",
        Schema::create('chits', function (Blueprint $table) {
            $table->id();
            $table->text('gpname')->nullable();
            $table->string('stmonth')->nullable();
            $table->text('enmonth')->nullable();
            $table->bigInteger('tgpvalue')->nullable();
            $table->bigInteger('tmembers')->nullable();
            $table->bigInteger('mpamount')->nullable();
            $table->bigInteger('tinstalments')->nullable();
            $table->text('othdetails')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chits');
    }
};
