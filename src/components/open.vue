<template>
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
      <source src="/src/assets/drone-background-2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Dark Overlay -->
    <div class="video-overlay"></div>

    <div class="logo-text">
      <RouterLink to="/" class="logo-link">
        <img 
          class="pfc-logo"
          src="../assets/pfc-logo.png" 
          alt="logo" 
        />
      </RouterLink>

      <p class="slogan-txt">
        We are a full-service film production company
        <br> 
        in Playa del Carmen, Mexico
      </p>

      <div class="social-wrapper">
        <a class="social-link" href="https://www.youtube.com/@PlayaFilmCollective" target="_blank">
          <i class="fa-brands fa-youtube" style="color: #FF0000;"></i>
        </a>
        <a class="social-link" href="https://www.facebook.com/profile.php?id=61574939697817" target="_blank">
          <i class="fa-brands fa-facebook-f" style="color: #1877F2;"></i>
        </a>
        <a class="social-link" href="https://x.com/collectiveplaya?s=11" target="_blank">
          <i class="fa-brands fa-x-twitter" style="color: #000000;"></i>
        </a>
        <a class="social-link" href="https://www.instagram.com/playafilmcollective/" target="_blank">
          <i class="fa-brands fa-instagram" style="color: #DD2A7B;"></i>
        </a>
        <a class="social-link" href="mailto: playafilmcollective@gmail.com">
          <i class="fa-regular fa-envelope" style="color: #ffffff;"></i>
        </a>
      </div>
    </div>
  
  
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

/* Video as background */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* behind everything */
}

/* Dark overlay */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}


/* Text above video */
.logo-text {
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.pfc-logo {
  width: 300px;
  filter: invert(1);
  margin-bottom: 50px;
}

.slogan-txt {
  font-size: 2rem;
  font-family: "Pacifico", cursive;
  font-weight: 400;
   color: white;
  font-style: italic;
}

.social-wrapper {
  display: flex;
  z-index: 80;
}

.social-link {
  color: white;
  font-size: 40px;
  transition: 0.3s ease;
  margin: 20px 10px;
}

.social-link:hover {
    transform: scale(1.2);
}

@media screen and (max-width: 400px ) {
  .pfc-logo {
    width: 200px;
    margin-bottom: 50px;
  }

  .slogan-txt {
    font-size: 1.25rem;
  }

  .social-link {
    font-size: 30px;
  }

}

</style>