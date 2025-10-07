<template>

    <div class="cta-socials">
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
      <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>

  <section class="hero-section">
    <!-- Background Video -->
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

    <!-- Dark Overlay -->
    <div class="video-overlay"></div>

    
    <!-- Main Content -->
    <div class="main-container">
      
      <!-- Logo -->
      <img class="logo" src="../assets/pfc-logo.png" alt="pfc-logo" />

      <div class="cta-text-btn">
        <h1 class="text">
          We are a full-service <br />
          film production company <br />
          in Playa del Carmen, <br />
          Mexico
        </h1>
        <button class="btn">get to know us!</button>
      </div>

    </div>

  </section>


  <div class="btm-bar"></div>


</template>

<style scoped>
.hero-section {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Video background */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* z-index: ; */
}

/* Dark overlay (adjust opacity to taste) */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.20);
  z-index: 1;
}

/* Logo */
.logo {
  filter: invert(100);
  /* position: absolute; */
  /* top: 40px; */
  width: 225px;
  z-index: 2;

}

/* Text and button container */
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid; */
  transform: translateY(-75px);
  height: 60vh;

  position: relative;
  z-index: 3;
}

.cta-text-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid; */
  width: 825px;
  /* transform: translaffteX(-50px); */
}

.text {
  text-align: right;
  font-size: 2.75rem;
  font-family:Arial, Helvetica, sans-serif;
}

.btn {
  margin-top: 20px;
  padding: 12px 28px;
  font-size: 1.5rem;
  border: 3px solid #fff;
  border-radius: 999px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.1);
}

.cta-socials {
  position: absolute;
  bottom: 46px;          /* distance from bottom */
  right: 46px;           /* distance from right edge */
  display: flex;
  gap: 18px;
  z-index: 2;            /* above overlay and video */
}

.cta-socials a {
  font-size: 1.6rem;
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;
}

.cta-socials a:hover {
  transform: scale(1.15);
}


.btm-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 130%;
  height: 140px;
  background-color: #2B4C62; /* vivid green */
  transform: skewY(-5deg) translateY(110px);
  transform-origin: left bottom;
  z-index: 1;
  will-change: transform; /* helps render solid edges */
}


/* Responsive adjustments */
@media (max-width: 769px) {
  .cta-text-btn {
    display: flex;
    flex-direction: column;
    transform: translateY(50px);
    /* border: 1px solid; */
    width: auto;
    height: 300px;
  }

  .text{
    text-align: center;
    font-size: 1.75rem;
  }
}
</style>









<!-- <template>

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

  <div class="video-overlay"></div>


<img class="logo" src="../assets/pfc-logo.png" alt="pfc-logo">

<div class="main-container">
  
  <div class="cta-text-btn">
    <h1 class="text">
        We are a full-service <br />
        film production company <br />
        in Playa del Carmen, <br>
        Mexico
    </h1>
    <button class="btn">get to know us!</button>
  </div>

</div>





</template>

<script>


</script>


<style scoped>

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100vh;
}

.logo {
  filter: invert(100);
  width: 250px;
  /* border: 1px solid; */
  position: absolute;
  margin: 50px;
}

.cta-text-btn {
  display: flex;
  align-items: center;
  border: 1px solid purple;
  width: 700px;
  justify-content: space-between;
}

.text {
  color: rgb(255, 255, 255);
  text-align: end;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  font-size: 40px;
}

.btn {
  padding: 10px;
  border: 3px solid;
  background: none;
  border-radius: 100px;
  color: white;
  font-size: 24px;
}



</style> -->















<!-- 
<template>
  <section class="cta-section">
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


    <div class="cta-overlay"></div>

    <div class="cta-content">
      <div class="cta-logo">
        <img src="../assets/pfc-logo.png" alt="Playa Film Collective" />
      </div>

      <div class=cta-wrapper>  
        <h1 class="text">
          We are a full-service <br />
          film production company <br />
          in Playa del Carmen, Mexico
        </h1>

        <button class="cta-btn">get to know us</button>
      </div>


      <div class="cta-socials">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>



</script>

<style scoped>

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.cta-section {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.cta-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text{ 
  text-align: end;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

.cta-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  padding: 0 20px;
}

.cta-logo img {
  filter: invert(100);
  width: 200px;
  margin-bottom: 20px;
}

.cta-content h1 {
  font-size: 2rem;
  line-height: 1.4;
  font-weight: bold;
}

@media (min-width: 768px) {
  .cta-content h1 {
    font-size: 3rem;
  }
}

.cta-btn {
  padding: 18px;
  font-size: 1.3rem;
  font-weight: 500;
  border: 2px solid #fff;
  border-radius: 999px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: #fff;
  color: #000;
}

.cta-socials {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.cta-socials a {
  font-size: 1.5rem;
  color: #fff;
  transition: color 0.3s ease;
}

.cta-socials a:hover {
  color: #00bfff;
}
</style> -->
