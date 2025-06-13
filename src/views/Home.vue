<template>
  <!-- <navBar></navBar> -->

  <!-- BACKGROUND -->
  <div class="video-container">
      <video class="loop-video" playsinline autoplay loop muted>
        <source src="/src/assets/drone-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>

  <navBar></navBar>
  <div class="main-container">
    <img class="pfc-logo" src="../assets/pfc-logo.png" alt="">
  </div>
</template>

<script setup>
import navBar from '../components/nav-bar.vue'

</script>

<style scoped>

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100vh;
  animation: fadeIn .75s ease-in-out forwards;
}

.pfc-logo {
  width: 300px;
  filter: invert(100);
}

.links-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
}

.links-container a {
  color: white;
  text-decoration: none;
  transition: 0.3s ease;
}

.links-container a:hover {
  transform: scale(1.2);
}

 .nav-link {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
 }

.social-link {
  font-size: 35px;
}

.video-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -999;
}

.video-container {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1000;
}

.loop-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
  z-index: -1000;
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
