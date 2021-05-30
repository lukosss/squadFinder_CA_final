@extends('admin.layouts.partials.page',['content_title'=>trans('app.games')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.ranks.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.ranks.store');
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
                                    <label for="rank_name">@lang('app.rank_name')</label>
                                    <input type="text" class="form-control" name="rank_name" id="rank_name"
                                           value="{{$model->rank_name ?? ''}}" required
                                           placeholder="@lang('app.enter_rank_name')">
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
