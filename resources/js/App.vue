<template>
    <div id="app" class="bg-light">
        <div class="row p-0 m-0">
            <div class="col-2 p-0">
                <SideNavbar/>
            </div>
            <div class="col-10 d-flex justify-content-around mt-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import SideNavbar from './Components/SideNavbar.vue';

export default {
    name: "MainApp",
    components: {
        SideNavbar,
    },
}
</script>

<style scoped>

</style>
