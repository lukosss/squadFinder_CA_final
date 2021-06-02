@extends('admin.layouts.partials.page',['content_title'=>trans('app.games')])

@section('content')
    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h3 class="card-title">@lang('app.games-list')</h3>
                            <div>
                                <a href="{{route('admin.games.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
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
                                                    @lang('app.logo')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.id')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.title')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.description')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.ranks')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('app.actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($games as $game)
                                                <tr class="odd">
                                                    <td>
                                                        @foreach($game->images as $image)
                                                            <a href="/storage/uploads/images/original/{{$image->title ?? ''}}" class="table_image_link">
                                                                <img src="/storage/uploads/images/thumb/{{$image->title ?? ''}}" alt="not available" width="80"/>
                                                            </a>
                                                        @endforeach
                                                    </td>
                                                    <td>{{$game->id ?? ''}}</td>
                                                    <td>{{$game->title ?? ''}}</td>
                                                    <td>{{$game->description ?? ''}}</td>
                                                    <td>@foreach($game->ranks as $rank)
                                                            {{$rank->rank_name}};
                                                        @endforeach
                                                    </td>
                                                    <td class="d-flex justify-content-around"><a class="btn btn-info"
                                                                                                 href="{{route('admin.games.edit', $game->id)}}">@lang('app.edit')</a>
                                                        <form action="{{route('admin.games.destroy', $game->id)}}" method="post">
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
