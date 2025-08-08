<template>


  <section class="hero-section">

    <!-- Background video -->
    <video
      class="hero-video"
      playsinline
      autoplay
      loop
      muted
      preload="metadata"
    >
      <source src="/src/assets/drone-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>


    <div class="cta-container">

      <div class="cta-wrapper">
        <h1>We are a full-service film production company in Playa del Carmen, Mexico</h1>
        <button>get to know us</button>
      </div>

    </div>




  </section>


</template>

<script>
export default {};
</script>

<style scoped>

.hero-section {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.cta-container {
  display: flex;
  justify-content: space-around;
  border: 5px solid;
  height: 100vh;
  /* remove height: 100vh */
}

.cta-wrapper {
  border: 1px solid;
  width: max-content;
  height: max-content;
  display: flex;
}

</style>
