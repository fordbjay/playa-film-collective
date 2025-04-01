<template>
    <div class="video-container">
      <video class="loop-video" playsinline autoplay loop muted>
        <source src="/src/assets/drone-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <div class="page-content">
          <RouterView />
        </div>
      </div>
  </div>

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<style>

* {
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
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
  animation: fadeIn 1s ease-in-out forwards;
}

.content-overlay {
  z-index: -1000;
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
  flex-direction: column;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* .page-content {
  padding-top: 200px;
} */

</style>