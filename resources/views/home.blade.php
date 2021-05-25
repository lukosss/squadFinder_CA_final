@extends('layouts.app')

@section('content')
    @if(Auth::user()->role_id !== 1)
        <div id="app" class="bg-light min-vh-100">
            <div class="row p-0 m-0">
                <div class="col-3">
                   <main-app></main-app>
                </div>
                <div class="col-9 text-white d-flex justify-content-center">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    @else
        <div class="row p-0 m-0">
            <div class="col-2 p-0">
                @include('sidebar')
            </div>
            <div class="col-10 p-0 bg-light">
                @include('dashboard')
            </div>
        </div>
    @endif
@endsection
