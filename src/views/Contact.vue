<template>
    <navBar></navBar>
    <div class="main-container">
        <p>
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
}

.email-link {
    color: white;
    text-decoration: none;
}

</style>