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
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->text('fullname')->nullable();
            $table->text('ccode')->nullable();
            $table->text('empcode')->nullable();
            $table->string('dob')->nullable();
            $table->string('gender')->nullable();
            $table->string('maritalstatus')->nullable();
            $table->text('bloodgroup')->nullable();
            $table->string('physicallychallenged')->nullable();
            $table->text('nationality')->nullable();
            $table->text('passport')->nullable();
            $table->string('joinedon')->nullable();
            $table->string('probationendson')->nullable();
            $table->text('department')->nullable();
            $table->text('role')->nullable();
            $table->text('reportingto')->nullable();
            $table->text('prevexp')->nullable();
            $table->text('payfrequency')->nullable();
            $table->text('salary')->nullable();
            $table->text('status')->nullable();
            $table->string('resignedon')->nullable();
            $table->text('resignreason')->nullable();
            $table->text('emrgencycp')->nullable();
            $table->text('relation')->nullable();
            $table->text('emrgencynum')->nullable();
            $table->text('insurancepolicy')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
