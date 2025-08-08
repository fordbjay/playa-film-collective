<template>

<!-- content -->


  <div class="main-container">

    <div class="content-container">

      <img class="pfc-logo" src="../assets/pfc-logo.png" alt="logo">
              
      <h1>We are a full-service film production company in Playa del Carmen, Mexico</h1>

    </div>

    <!-- Background video as part of content flow -->
    <div class="video-section">
      <video
        class="scroll-video"
        playsinline
        autoplay
        loop
        muted
        preload="metadata"
      >
        <source src="/src/assets/drone-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>



  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-section {
  width: 100vw;
  height: 100vh; /* fills one full viewport height */
  overflow: hidden;
  z-index: -1;
}

.scroll-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content-container {
  position: absolute;
  z-index: 1;
}

.pfc-logo {
  width: 200px;
  filter: invert(100);
}

h1 {
  color: white;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}



</style>
