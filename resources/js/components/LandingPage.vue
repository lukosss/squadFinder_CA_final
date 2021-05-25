<template>
    <div class="bg-light text-white min-vh-100 hero overlay" :style="{'background-image':'url(images/GAMING-IMAGE.jpg)'}">
        <div class="overlay">
        <div class="container">
            <div class="pt-5">
                <h2>Join Thousands of Players on Squad Finder Now!</h2>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    }
</script>

<style scoped>
    .hero{
        background-repeat: no-repeat;
        background-size: cover;
    }
    .overlay{
        background-color: rgba(0, 0, 0, 0.5);
        min-height: 100vh;
    }
</style>
