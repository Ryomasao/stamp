
@extends('layouts.guest')
@section('title', 'Page Title')
@section('content')
    <div class="index">
        <table class="table">
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Company_ID</th>
                     <th>JAN1</th>
                     <th>JAN2</th>
                     <th>JAN3</th>
                     <th>created_at</th>
                 </tr>
             </thead> 
             <tbody>
             @foreach($stamps as $stamp)
                 <tr>
                    <td><a href="{{ $stamp->path() }}">{{ $stamp->id }} </a></td>
                    <td>{{ $stamp->company_id }}</td>
                    <td>{{ $stamp->jan_code_1}}</td>
                    <td>{{ $stamp->jan_code_2}}</td>
                    <td>{{ $stamp->jan_code_3}}</td>
                    <td>{{ $stamp->created_at}}</td>
                 </tr>
             @endforeach
             </tbody>
        </table> 
    </div>
@endsection

@section('content-footer')
    <script src="/js/app.js"></script>
    <script src="/js/guest/stamps.js"></script>
@endsection