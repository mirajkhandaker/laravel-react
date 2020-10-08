<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
    // return $request->user();
// });

Route::get('/blogs','Api\BlogController@index');
Route::post('/blogs/store','Api\BlogController@store');
Route::delete('/blogs/delete/{category_id}','Api\BlogController@destroy');
Route::get('/blogs/edit/{id}','Api\BlogController@edit');
Route::put('/blogs/update/{id}','Api\BlogController@update');
