@extends('admin.layouts.app',['body_class'=>' sidebar-mini layout-fixed'])

@section('page')
    <div class="wrapper">
        <!-- NAVBAR-->
    @include('admin.layouts.partials.navbar')

    <!-- SIDEBAR-->
        <div class="row m-0 p-0">
            <div class="col-2 p-0">
        @include('admin.layouts.partials.sidebar')
            </div>
            <div class="col-10">
            <!-- CONTENT-->
            @yield('content')
            </div>
        </div>
        </div>
        <!-- FOOTER-->
        @include('admin.layouts.partials.footer')
    </div>
@endsection

