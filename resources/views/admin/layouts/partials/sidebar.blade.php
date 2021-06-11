<div class="sticky-top d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 col-12" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">Admin Panel</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item" >
            <a href="{{ route('admin.') }}" class="{{ (request()->is('admin/home*')) || (request()->is('home*'))  ? 'active' : '' }} nav-link text-white" aria-current="page">
                <i class="fas fa-chart-line"></i> Dashboard
            </a>
        </li>
        <li>
            <a href="{{ route('admin.users.index') }}" class="{{ (request()->is('admin/users*')) ? 'active' : '' }} nav-link text-white">
                <i class="fas fa-users"></i> Users
            </a>
        </li>
        <li>
            <a href="{{ route('admin.games.index') }}" class="{{ (request()->is('admin/games*')) ? 'active' : '' }} nav-link text-white">
                <i class="fas fa-gamepad"></i> Games
            </a>
        </li>
        <li>
            <a href="{{ route('admin.ranks.index') }}" class="{{ (request()->is('admin/ranks*')) ? 'active' : '' }} nav-link text-white">
                <i class="fas fa-gem"></i> Ranks
            </a>
        </li>
        <li>
            <a href="{{ route('admin.cities.index') }}" class="{{ (request()->is('admin/cities*')) ? 'active' : '' }} nav-link text-white">
                <i class="fas fa-city"></i> Cities
            </a>
        </li>
        <li>
            <a href="{{ route('admin.game-user.index') }}" class="{{ (request()->is('admin/game-user*')) ? 'active' : '' }} nav-link text-white">
                <i class="fas fa-headset"></i> Users Games
            </a>
        </li>
    </ul>
    <hr>
</div>
