<template>
    <div id="app">
        <SideNavbar/>
        <router-view />
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
