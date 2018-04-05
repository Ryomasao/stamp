<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}"> 
        <title>アプリ名 - @yield('title')</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css">
        <link rel="stylesheet" type="text/css" href="/css/guest.css">
    </head>
    <body>
        <div class="header">
            RR画面を想定
        </div>
        <div class="container">
            @yield('content')
        </div>

        <div class="footer">
            @yield('content-footer')
        </div>
    </body>
</html>