<template>
    <navBar></navBar>
    <div class="main-container">
        <p>
            Please send your inquiries to 
            <a 
                class="email-link"
                href="mailto:playafilmcollective@gmail.com"
            >
            playafilmcollective@gmail.com
            </a>
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
    background-color: rgb(157,185,222);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
}

.email-link {
    color: white;
    font-weight: 900;
    text-decoration: none;
}

</style>