<template>
    <div class="sticky-top d-flex align-items-center flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 col-12" style="width: 280px;">
        <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Main Menu</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/squads">
                    <i class="fas fa-search"></i> Find Squadmates
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/my-games">
                    <i class="fas fa-dice-d20"></i> My games
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/games">
                    <i class="fas fa-gamepad"></i> Add games
                </router-link>
            </li>
        </ul>
        <hr>
    </div>

</template>

<script>
export default {
}
</script>

<style scoped>
    .is-active {
        background-color: #433fd1;
    }
</style>
