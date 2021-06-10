@extends('admin.layouts.partials.page',['content_title'=>trans('app.user_games')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.game-user.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.game-user.store');
    }
    ?>
    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="card card-{{$tableColor}}">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.new_entry')</h3>
                        </div>

                        <form action="{{$route}}" method="POST">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="user_id">@lang('app.user_name')</label>
                                    <select class="js-example-basic-single" name="user_id" style="width: 100%;">
                                        <option disabled selected> ------- </option>
                                        @foreach($users as $user)
                                            <option
                                                {{($model->user->id ?? '') == $user->id ? 'selected=selected' : ''}} value="{{$user->id}}">
                                                {{$user->first_name}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <label for="rank">@lang('app.game')</label>
                                    <select class="select2 select2spec" name="game_id" id="game"
                                            data-placeholder="select game" style="width: 100%;">
                                        @foreach($games as $game)
                                            <option
                                                {{($model->game->id ?? '') == $game->id ? 'selected=selected' : ''}} value="{{$game->id}}">
                                                {{$game->title}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <label for="game">@lang('app.rank')</label>
                                    <select class="select2" name="rank_id" id="rank" data-placeholder="select rank" style="width: 100%;"></select>
                                </div>

                                <div class="form-group col-4">
                                    <label for="ingame_name">@lang('app.ingame_name')</label>
                                    <input type="text" class="form-control" name="ingame_name" id="ingame_name"
                                           value="{{$model->ingame_name ?? ''}}"
                                           placeholder="@lang('app.enter_ingame_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="comment">@lang('app.comment')</label>
                                    <input type="text" class="form-control" name="comment" id="comment"
                                           value="{{$model->comment ?? ''}}" placeholder="@lang('app.enter_comment')">
                                </div>

                            </div>
                                @if ($errors->first)
                                <span class="text-danger"> {{$errors->first()}} </span>
                                @endif
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">@lang('app.submit')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
