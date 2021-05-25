<template>
    <div>
<!--        <b-button variant="primary" v-b-toggle.sidebar-variant>>>>></b-button>-->
        <b-sidebar id="sidebar-variant" title="Squad Finder" bg-variant="dark" no-header-close=true
                   visible no-close-on-route-change=true text-variant="white" shadow="lg">
            <div class="px-3 py-2">
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/home">
                            Dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link class="nav-link text-white" to="/games">
                            Games
                        </router-link>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                            Players
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                            Customers
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
