<template>
  <navBar></navBar>
  <foot></foot>
</template>

<script setup>
import navBar from '../components/nav-bar.vue'
import foot from '../components/footer.vue'

</script>

<style scoped>

.links-container {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 25px;
}

.links-container a {
    font-size: 50px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.links-container a:hover {
    color: #ffcc00;
}


/* 
.video-container {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.loop-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
}

.content-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: column;
} */

</style>
