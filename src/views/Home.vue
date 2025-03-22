<template>
  <div class="video-container">
    <video class="loop-video" playsinline autoplay loop muted>
      <source src="/src/assets/drone-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content-overlay">
      <div class="text-container">
        <h1>PLAYA FILM COLLECTIVE</h1>
        <h2 class="coming-soon">COMING SOON...</h2>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
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
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coming-soon {
  font-size: 1.5rem;
  margin-top: 10px;
}
</style>
