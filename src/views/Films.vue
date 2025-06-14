<template>
    <navBar></navBar>
    <div class="main-container">

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
    background-color: rgb(61,97,115);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
}

</style>