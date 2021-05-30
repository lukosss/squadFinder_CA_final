@extends('admin.layouts.partials.page',['content_title'=>trans('app.games')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.games.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.games.store');
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
                                    <label for="title">@lang('app.title')</label>
                                    <input type="text" class="form-control" name="title" id="title"
                                           value="{{$model->title ?? ''}}" required
                                           placeholder="@lang('app.enter_title')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="description">@lang('app.description')</label>
                                    <input type="text" class="form-control" name="description" id="description"
                                           value="{{$model->description ?? ''}}"
                                           placeholder="@lang('app.enter_description')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="logo">@lang('app.logo')</label>
                                    <input type="email" class="form-control" name="logo" id="logo"
                                           value="{{$model->game_logo ?? ''}}" placeholder="@lang('app.enter_logo')">
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
