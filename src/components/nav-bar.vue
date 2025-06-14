<template>

<div :class="{ 'nav-container': true, 'slide-right': $route.name === 'Home' }">

    <RouterLink v-if="$route.name !== 'Home'" to="/" class="logo-link">
      <img 
        :class="{ 'pfc-logo': true, 'slide-left': $route.name !== 'Home' }" 
        src="../assets/pfc-logo.png" 
        alt="logo" 
      />
    </RouterLink>

    <div class="navs-wrapper wrapper">
      <RouterLink to="/about" class="nav link">WHO WE ARE</RouterLink>
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
  right: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px;
  z-index: 10000;
}

.slide-right {
    animation: slideRight 0.5s ease-in-out forwards;
}

.slide-left {
  animation: slideLeft 0.5s ease-in-out forwards;
}

.logo-link {
  position: fixed;
  top: 50px;
  left: 50px;
  /* z-index: 1100; */
  display: inline-block;
}

.pfc-logo {
  width: 125px;
  filter: invert(100);

}

.navs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
}

.socials-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.link {
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-decoration: none;
  transition: .2s ease-in-out;
}

.link:hover {
  transform: scale(1.2);
}

.nav {
    font-size: 20px;
}

.social {
    font-size: 30px;
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
  