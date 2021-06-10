@extends('admin.layouts.partials.page')

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="mt-4">
                <h2>Welcome, {{\Illuminate\Support\Facades\Auth::user()->first_name}}.</h2>
                <div class="mt-3">

                <ul>
                    <li>Total number of registered users on platform: <b>{{$users->count()}}</b></li>
                    <li>Total number of games available: <b>{{$games->count()}}</b></li>
                    <li>Total number of games added to player finder: <b>{{$gamesAdded->count()}}</b></li>
                    <li>Total number of ranks available: <b>{{$ranks->count()}}</b></li>
                    <li>Total number of cities available: <b>{{$cities->count()}}</b></li>
                    <li>Most popular game on the platform now: <b>{{$mostPopularGame[0]->title}}</b> with <b>{{$mostPopularGamePlayers->count()}}</b> players.</li>
                    <li>Latest registered user: <b>{{$latestUser->first_name}} {{$latestUser->last_name}}</b> </li>
                    <li>Most recent added game: <b>{{$latestGame->title}}</b> </li>
                </ul>

                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
@endsection
