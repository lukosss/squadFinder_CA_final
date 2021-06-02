<!DOCTYPE html>
<html lang="lt">

@include('admin.layouts.partials.head')

<body class="{{$body_class ?? ''}}">

@yield('page')

<!-- Scripts -->
@yield('js')
<script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
