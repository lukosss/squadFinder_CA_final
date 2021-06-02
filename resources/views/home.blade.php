@extends('layouts.app')

@section('content')
    @if(Auth::user()->role_id !== 1)
        <div id="app">
                   <main-app></main-app>
        </div>
    @endif
@endsection
