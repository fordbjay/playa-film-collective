<template>

  <div :class="{ 'nav-container': true, 'slide-right': $route.name === 'Home' }">

    <RouterLink v-if="$route.name !== 'Home'" to="/" class="logo-link wrapper">
      <img 
        :class="{ 'pfc-logo': true, 'slide-left': $route.name !== 'Home' }" 
        src="../assets/pfc-logo.png" 
        alt="logo" 
      />
    </RouterLink>

    <div class="navs-wrapper wrapper">
      <RouterLink to="/about" class="nav link">ABOUT US</RouterLink>
      <RouterLink to="/films" class="nav link">FILMS</RouterLink>
      <RouterLink to="/contact" class="nav link">CONTACT</RouterLink>
    </div>

    <div class="socials-wrapper wrapper">
      <a class="social link" href="https://www.youtube.com/@PlayaFilmCollective" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>
      <a class="social link" href="https://www.facebook.com/profile.php?id=61574939697817" target="_blank">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a class="social link" href="https://x.com/collectiveplaya?s=11" target="_blank">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      <a class="social link" href="https://www.instagram.com/playafilmcollective/" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
      
  </div>

</template>

<script setup>



</script>

<style scoped>

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
}

.wrapper {
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
}

.logo-link {
  top: 50px;
  left: 50px;
}

.navs-wrapper {
  top: 50px;
  right: 50px;
  display: flex;
  gap: 10px;
  align-items: end;
}

.socials-wrapper {
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.pfc-logo {
  height: 125px;
  width: auto;
  filter: invert(100);
}

.nav.link, .social.link {
  color: white;
  text-decoration: none;
  transition: .2s ease-in-out;
  /* font-size: 20px; */
}

.link:hover {
  transform: scale(1.2);
}

.nav {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
}

.social {
  font-size: 30px;
}

.slide-right {
  animation: slideRight 0.5s ease-in-out forwards;
}

.slide-left {
  animation: slideLeft 0.5s ease-in-out forwards;
}

@keyframes slideRight {
  from {
    transform: translate(175px);
  }
  to {
    transform: translate(0px);
  }
}

@keyframes slideLeft {
  from {
    transform: translate(-175px);
  }
  to {
    transform: translate(0px);
  }
}

  </style>
  