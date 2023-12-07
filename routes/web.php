<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ChitController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/employes', [EmployeController::class, 'index'])->name('employes.index');
    Route::get('/employes-create', [EmployeController::class, 'create'])->name('employes.create');


    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::get('/settings-create', [SettingController::class, 'create'])->name('settings.create');
    Route::post('/settings-store', [SettingController::class, 'store'])->name('settings.store');
    Route::delete('/settings-delete/{id}', [CustomerController::class, 'destroy']) -> name('settings.destroy');

    Route::get('/members', [MemberController::class, 'index'])->name('members.index');
    Route::get('/members-create', [MemberController::class, 'create'])->name('members.create');
    Route::post('/members-store', [MemberController::class, 'store'])->name('members.store');
    Route::delete('/members-delete/{id}', [MemberController::class, 'destroy']) -> name('members.destroy');

    Route::get('/group', [ChitController::class, 'index'])->name('group.index');
    Route::get('/group-create', [ChitController::class, 'create'])->name('group.create');
    Route::post('/group-store', [ChitController::class, 'store'])->name('group.store');
    Route::delete('/group-delete/{id}', [ChitController::class, 'destroy']) -> name('group.destroy');

    Route::get('/payment', [PaymentController::class, 'index'])->name('payment.index');
    Route::get('/payment-create', [PaymentController::class, 'create'])->name('payment.create');
    Route::post('/payment-store', [PaymentController::class, 'store'])->name('payment.store');
    Route::delete('/payment-delete/{id}', [PaymentController::class, 'destroy']) -> name('payment.destroy');
});

require __DIR__.'/auth.php';
