<template>

<!-- <navBar></navBar> -->

<div class="main-container">
    <div class="content-wrapper">
        <h1>ABOUT US</h1>
<p class="text">
        We aim to showcase the creativity and talent here, 
        proving there’s a hunger for filmmaking in our community. 
        It’s not just about one event—it’s about building a 
        legacy, connecting with supporters, and putting Playa 
        del Carmen on the map as a hub for cinematic innovation, 
        all while pursuing our passion together.
    </p>
    <img class="pfc-crew-pic" src="../assets/playa-low.jpg" alt="pfc-crew">

    </div>
    
</div>

</template>

<script setup>

import navBar from '../components/nav-bar.vue'

</script>

<style scoped>

.main-container {
    height: 100vh;
    background-color: rgb(69,147,171);
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

h1 {
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.text {
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
}

.pfc-crew-pic {
    width: 500px;
}


</style>