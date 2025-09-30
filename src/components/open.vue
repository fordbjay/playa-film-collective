<template>

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



</style>















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
