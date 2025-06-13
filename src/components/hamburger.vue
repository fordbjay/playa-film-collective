<template>
    <button @click="toggleMenu" class="hamburger" :class="{ open: isOpen }">
        <span></span>
        <span></span>
        <span></span>
    </button>
    
    <!-- v-if="isOpen" -->
    <transition name="slide">
  <div v-if="isOpen" class="menu">
    <div class="nav-wrapper">
      <RouterLink to="/about" class="nav-link">ABOUT</RouterLink>
      <RouterLink to="/films" class="nav-link">FILMS</RouterLink>
      <RouterLink to="/contact" class="nav-link">CONTACT</RouterLink>
    </div>

    <div class="social-wrapper">
      <a class="social-link" href="https://www.youtube.com/@PlayaFilmCollective" target="_blank">
        <i class="fa-brands fa-youtube"></i>
      </a>
      <a class="social-link" href="https://www.facebook.com/profile.php?id=61574939697817" target="_blank">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a class="social-link" href="https://x.com/collectiveplaya?s=11" target="_blank">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      <a class="social-link" href="https://www.instagram.com/playafilmcollective/" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  </div>
</transition>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  </script>
  
  <style scoped>
  
  .hamburger {
    position: fixed;
    top: 20px;
    right: 50px;
    border: 1px solid; 
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;
    padding: 0;
  }
  
  /* Hamburger lines */
  .hamburger span {
    position: absolute;
    width: 100%;
    height: 6px; 
    background-color: white;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  /* Line positions for normal state */
  .hamburger span:nth-child(1) {
    top: 12px;
  }
  .hamburger span:nth-child(2) {
    top: 25px;
  }
  .hamburger span:nth-child(3) {
    top: 38px;
  }
  
  /* Transform into X */
  .hamburger.open span:nth-child(1) {
    top: 25px;
    transform: rotate(45deg);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open span:nth-child(3) {
    top: 25px;
    transform: rotate(-45deg);
  }

/* Menu dropdown */
.menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 90;
}

/* Nav links at top of dropdown */
.nav-wrapper {
    position: fixed;
    text-align: right;
    top: 100px;
    right: 50px;
    display: flex;
    flex-direction: column;
    z-index: 80;
}

.nav-link {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  text-decoration: none;
  font-size: 26px;
  transition: 0.3s ease;
}

.nav-link:hover {
    transform: scale(1.2);
}

/* Social links fixed at bottom of page */
.social-wrapper {
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  z-index: 80;
  align-items: center;
}

.social-link {
  color: white;
  font-size: 40px;
  transition: 0.3s ease;
}

.social-link:hover {
    transform: scale(1.2);
}

/* Slide-in transition */
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}



  </style>
  