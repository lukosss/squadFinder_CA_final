@extends('admin.layouts.partials.page',['content_title'=>trans('app.ranks')])

@section('content')
    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h3 class="card-title">@lang('app.ranks-list')</h3>
                            <div>
                                <a href="{{route('admin.ranks.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
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
                                                    @lang('app.rank_name')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($ranks as $rank)
                                                <tr class="odd">
                                                    <td>{{$rank->id ?? ''}}</td>
                                                    <td>{{$rank->rank_name ?? ''}}</td>
                                                    <td class="d-flex justify-content-around"><a class="btn btn-info"
                                                           href="{{route('admin.ranks.edit', $rank->id)}}">@lang('app.edit')</a>
                                                        <form action="{{route('admin.ranks.destroy', $rank->id)}}" method="post">
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
