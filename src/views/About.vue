<template>

<!-- <navBar></navBar> -->

<div class="main-container">
    <p>
        We aim to showcase the creativity and talent here, 
        proving there’s a hunger for filmmaking in our community. 
        It’s not just about one event—it’s about building a 
        legacy, connecting with supporters, and putting Playa 
        del Carmen on the map as a hub for cinematic innovation, 
        all while pursuing our passion together.
    </p>
</div>

</template>

<script setup>

import navBar from '../components/nav-bar.vue'

</script>

<style scoped>

.main-container {
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 100vh;
    background-color: rgb(69,147,171);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
    z-index: 10000000;
}

</style>