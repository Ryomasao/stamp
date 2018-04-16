
@extends('layouts.guest')
@section('title', 'Page Title')
@section('content')
    <div class="show-stamp">
        <div class="">ユーザーID： {{$user_id}}</div>
        <div class="preview">
        <preview ref="child" template="{{ $stamp->headerStyle() }}" class="preview-header"></preview>
            <div class="preview-content" style="{{ $stamp->stamp_style }}">
                <h1 class="">ここにスタンプが入る</h1>
                <stamp-component></stamp-component>
            </div>
            <div class="preview-footer">
                <p>footer</p>
            </div>
        </div>
    </div>
@endsection

@section('content-footer')
    <script src="/js/app.js"></script>
    <script src="/js/guest/stamps.js"></script>
@endsection