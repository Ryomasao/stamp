<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('othersite', function () {
    return view('othersite');
});

Route::get('/', function () {
    return view('index');
});

Route::get('stamps', 'GuestStampController@index');
Route::get('stamps/{stamp}', 'GuestStampController@show');
Route::post('stamps/{stamp}', 'GuestStampController@show');


//スタンプの一覧
Route::get('admin/stamps', 'AdminStampController@index')->name('stamps.index');
//スタンプの新規作成
Route::get('admin/stamps/create', 'AdminStampController@create')->name('stamps.create');
Route::get('admin/stamps/prot', 'AdminStampController@prot')->name('stamps.prot');
//スタンプの新規作成(froala ver)
Route::get('admin/stamps/froala', 'AdminStampController@froala')->name('stamps.froala');
//スタンプを登録する
Route::post('admin/stamps', 'AdminStampController@store');


Route::post('admin/images', 'ImageController@store');
