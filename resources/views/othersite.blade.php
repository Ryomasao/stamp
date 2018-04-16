@extends('layouts.other')
@section('title', 'Page Title')
@section('content-header')
    <link rel="stylesheet" type="text/css" href="/css/app.css">
@endsection
@section('content')
    <h1>RR TOP画面を想定</h1>
    <ul>
        <li>企業ページを表示したい場合、IDを調べてリンクを貼る？</li>
        <form action="/stamps/1" method="post">
            {{csrf_field()}}
        <label>www.hogedomain/stamps/スタンプラリー台紙のID</label>
        <input type="submit" value="とりあえずpostメソッド">
        <input type="hidden" name="user_id" value="1123445">
        </form>
    </ul>
@endsection
@section('content-footer')
@endsection