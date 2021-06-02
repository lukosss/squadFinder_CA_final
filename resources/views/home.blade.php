@extends('layouts.app')

@section('content')
    @if(Auth::user()->role_id !== 1)
        <div id="app" class="bg-light min-vh-100">
                   <main-app></main-app>
        </div>
    @endif
@endsection
