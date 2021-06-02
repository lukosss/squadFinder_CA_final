<template>
    <div id="app">
        <div class="row">
            <div class="col-2 p-0">
                <SideNavbar/>
            </div>
            <div class="col-10 text-white d-flex justify-content-around mt-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import SideNavbar from './SideNavbar.vue';

export default {
    name: "MainApp",
    components: {
        SideNavbar,
    },
}
</script>

<style scoped>

</style>
