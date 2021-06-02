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

                        <form action="{{$route}}" method="POST" enctype="multipart/form-data">

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
                                    <div class="image_container">
                                        @foreach($model->images as $image)
                                            <div class="image_block">
                                                <span class="remove_image"><i class="fas fa-window-close">x</i></span>
                                                <a href="/storage/uploads/images/original/{{$image->title ?? ''}}">
                                                    <img src="/storage/uploads/images/thumb/{{$image->title ?? ''}}" alt="not available" width="80"/>
                                                </a>
                                                <input type="hidden" name="old_images[]" class="images_input" value="{{$image->title}}">
                                            </div>
                                        @endforeach
                                    </div>
                                    <input multiple type="file" name="images[]" class="images_input" id="user_images">
                                    <label class="images" for="images">@lang('app.select_image')</label>
                                    <div id="image_display">

                                    </div>
                                </div>

                                <div class="form-group col-4">
                                    <label for="gameRank">@lang('app.game_rank')</label>
                                    <select multiple class="select2" name="ranks[]" id="ranks"
                                            data-placeholder="select game ranks" style="width: 100%;">
                                        <option disabled selected> ------- </option>
                                        @foreach($ranks as $rank)
                                            <option
                                                {{$model->ranks->contains($rank->id) ? 'selected=selected' : ''}} value="{{$rank->id}}">
                                                {{$rank->rank_name}}
                                            </option>
                                        @endforeach
                                    </select>
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
