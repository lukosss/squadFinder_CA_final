@extends('admin.layouts.partials.page',['content_title'=>trans('app.users')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.users.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.users.store');
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
                                    <label for="first_name">@lang('app.first_name')</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name"
                                           value="{{$model->first_name ?? ''}}"
                                           placeholder="@lang('app.enter_first_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="last_name">@lang('app.last_name')</label>
                                    <input type="text" class="form-control" name="last_name" id="last_name"
                                           value="{{$model->last_name ?? ''}}"
                                           placeholder="@lang('app.enter_last_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="email">@lang('app.email')</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                           value="{{$model->email ?? ''}}" placeholder="@lang('app.enter_email')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="city">@lang('app.city_id')</label>
                                    <input type="text" class="form-control" name="city" id="city"
                                           value="{{$model->city_id ?? ''}}" placeholder="@lang('app.enter_city')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="display_name">@lang('app.display_name')</label>
                                    <input type="text" class="form-control" name="display_name" id="display_name"
                                           value="{{$model->display_name ?? ''}}" placeholder="@lang('app.enter_display_name')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="bio">@lang('app.bio')</label>
                                    <input type="text" class="form-control" name="bio" id="bio"
                                           value="{{$model->bio ?? ''}}" placeholder="@lang('app.enter_bio')">
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
                                    <label for="discord_username">@lang('app.discord_username')</label>
                                    <input type="text" class="form-control" name="discord_username" id="discord_username"
                                           value="{{$model->discord_username ?? ''}}" placeholder="@lang('app.enter_discord_username')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="steam_username">@lang('app.steam_username')</label>
                                    <input type="text" class="form-control" name="steam_username" id="steam_username"
                                           value="{{$model->steam_username ?? ''}}" placeholder="@lang('app.enter_steam_username')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="epic_username">@lang('app.epic_username')</label>
                                    <input type="text" class="form-control" name="epic_username" id="epic_username"
                                           value="{{$model->epic_username ?? ''}}" placeholder="@lang('app.enter_epic_username')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="origin_username">@lang('app.origin_username')</label>
                                    <input type="text" class="form-control" name="origin_username" id="origin_username"
                                           value="{{$model->origin_username ?? ''}}" placeholder="@lang('app.enter_origin_username')">
                                </div>

                                <div class="form-group col-4">
                                    <label for="password">@lang('app.password')</label>
                                    <input type="password" class="form-control" name="password" id="password"
                                           value="{{$model->password ?? ''}}" placeholder="@lang('app.enter_password')">
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
