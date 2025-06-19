<template>
    <!-- <navBar></navBar> -->
    <div class="main-container">
        <p>
            Please send your inquiries to 
            <a  
                href="mailto:playafilmcollective@gmail.com"
                class="email-link"
            >playafilmcollective@gmail.com
            </a>
        </p>

        <div class="arrow-text-container">
            <p>...or reach out to us on our socials</p>
            <img class="red-arrow" src="../assets/red-arrow.png" alt="red-arrow">

        </div>
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
    font-size: 22px;
}

.email-link {
    color: white;
    font-weight: 900;
    font-size: 34px;
    text-decoration: none;
    transition: .2s ease-in-out;
    display: inline-block;
}

.email-link:hover {
    transform: scale(1.015);
}

.arrow-text-container{
    position: absolute;
    right: 100px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* border: 1px solid; */
    width: 220px;
}

.red-arrow {
    width: 150px;
    opacity: 90%;
}

@media screen and (max-width: 1000px) {
    .email-link {
      font-size: 24px;
    }
  }

</style>