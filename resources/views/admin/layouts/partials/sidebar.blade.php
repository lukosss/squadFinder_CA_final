<div class="sticky-top d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 col-12" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">Admin Panel</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
            <a href="{{ route('admin.') }}" class="nav-link active" aria-current="page">
                Home
            </a>
        </li>
        <li>
            <a href="{{ route('admin.users.index') }}" class="nav-link text-white">
                Users
            </a>
        </li>
        <li>
            <a href="{{ route('admin.games.index') }}" class="nav-link text-white">
                Games
            </a>
        </li>
        <li>
            <a href="{{ route('admin.ranks.index') }}" class="nav-link text-white">
                Ranks
            </a>
        </li>
        <li>
            <a href="{{ route('admin.cities.index') }}" class="nav-link text-white">
                Cities
            </a>
        </li>
        <li>
            <a href="{{ route('admin.game-user.index') }}" class="nav-link text-white">
                Users Games
            </a>
        </li>
    </ul>
    <hr>
    <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
    </div>
</div>
