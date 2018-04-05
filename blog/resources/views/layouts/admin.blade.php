<!doctype html>
<html>
    <head>
        @component('components.header')
            @yield('header')
        @endcomponent
    </head>
    <body>
        @component('components.content-header')
            @yield('content-header')
        @endcomponent
        <div class="container main">
            @yield('content')
        </div>

        @component('components.content-footer')
            @yield('content-footer')
        @endcomponent
    </body>
</html>