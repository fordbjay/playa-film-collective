<template>
  <!-- <navBar></navBar> -->
   <div class="main-container">
      <img class="pfc-logo" src="../assets/pfc-logo.png" alt="">
      <!-- <p class="text">Coming Soon!</p> -->
      <div class="socials-container">
        <a href="https://www.facebook.com/profile.php?id=61574939697817" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://x.com/collectiveplaya?s=11" target="_blank">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.youtube.com/@PlayaFilmCollective" target="_blank">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/playafilmcollective/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="mailto:playafilmcollective@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
   </div>
  <!-- <foot></foot> -->
</template>

<script setup>
import navBar from '../components/nav-bar.vue'
import foot from '../components/footer.vue'

</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.pfc-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  filter: invert(100);
  animation: fadeIn 2s ease-in-out forwards;
}

.text {
  color: white;
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.socials-container {
  width: 80%;
  /* min-width: 500px; */
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  margin-top: 20px;
  animation: fadeIn 3s ease-in-out forwards;
}

.socials-container a {
  font-size: 50px;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;

}

.socials-container a:hover {
  transform: scale(1.2);
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .main-container {
    padding: 0 20px;
    text-align: center;
  }

  .pfc-logo {
    width: 80vw;
  }

  .socials-container {
    gap: 30px;
  }
}

</style>
