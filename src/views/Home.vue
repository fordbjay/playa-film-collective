<template>

  <!-- <navBar></navBar> -->
  <!-- BACKGROUND -->
  <div class="main-container">
    <img class="pfc-logo" src="../assets/pfc-logo.png" alt="logo">
  </div>
  
  <div class="video-container">
      <video class="loop-video" playsinline autoplay loop muted>
        <source src="/src/assets/drone-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>

</template>

<script setup>
import navBar from '../components/nav-bar.vue'

</script>

<style scoped>

.main-container {
  z-index: 999;
  display: flex; 
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: fadeIn .75s ease-in-out forwards;
  /* border: 1px solid; */
}

.pfc-logo {
  width: 300px;
  filter: invert(100);
}

.video-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
  width: 100vw;
   height: 100vh;
   object-fit: cover;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
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
  /* z-index: 1000; */
  animation: fadeIn .5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .pfc-logo {
    width: 80vw;
  }

}

</style>
