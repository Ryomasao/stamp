
@extends('layouts.admin')
@section('title', 'Page Title')
    <link rel="stylesheet" type="text/css" href="/css/admin/stamp-list.css">
@section('content')
    <div class="stamp-control">
        <div class="stamp-control-btn">
            <a href="{{ route('stamps.create') }}" class="stamp-control-lnk">Create New Stamp!</a>
        </div>
    </div>

    <div class="stamp-list">
        @foreach($stamps as $stamp)
               <div class="stamp">
                   <div class="stamp-content">
                     <p class="stamp-title">Tall tile</p>
                     <p class="stamp-subtitle">created_at {{ $stamp->created_at}} </p>
                   </div>
                </div>
        @endforeach
    </div>
@endsection

@section('content-footer')
@endsection