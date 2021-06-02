@extends('admin.layouts.partials.page',['content_title'=>trans('app.users-games')])

@section('content')
    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h3 class="card-title">@lang('app.user-games-list')</h3>
                            <div>
                                <a href="{{route('admin.game-user.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="user_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="user_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('app.id')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.game')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.user')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.rank')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.ingame_name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.comment')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($gameUsers as $gameUser)
                                                <tr class="odd">
                                                    <td>{{$gameUser->id ?? ''}}</td>
                                                    <td>{{$gameUser->game->title ?? ''}}</td>
                                                    <td>{{$gameUser->user->first_name ?? ''}}</td>
                                                    <td>{{$gameUser->rank->rank_name ?? ''}}</td>
                                                    <td>{{$gameUser->ingame_name ?? ''}}</td>
                                                    <td>{{$gameUser->comment ?? ''}}</td>
                                                    <td class="d-flex justify-content-around"><a class="btn btn-info"
                                                                                                 href="{{route('admin.game-user.edit', $gameUser->id)}}">@lang('app.edit')</a>
                                                        <form action="{{route('admin.game-user.destroy', $gameUser->id)}}" method="post">
                                                            @csrf
                                                            @method('DELETE')
                                                            <input type="submit" class="btn btn-danger" value="@lang('app.delete')">
                                                        </form>
                                                    </td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
