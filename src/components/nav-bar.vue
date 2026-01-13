<template>

  <div class='nav-container'>

    <div class="links-wrapper">
      <RouterLink to="/" class="link">Our Story</RouterLink>
      <RouterLink to="/" class="link">Projects</RouterLink>
      <RouterLink to="/" class="link">Contact</RouterLink>
    </div>
      
  </div>

</template>

<script setup>



</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  margin: 40px 0;
  position: absolute;
  z-index: 5;
  width: 100%;
  /* background-color: rgba(255,255,255,0.6); */
}

.pfc-logo {
  width: 60px;
  
}

.links-wrapper {
  display: flex;
  gap: 50px;
}

.link {
  text-decoration: none;
  color: white;
  font-weight: 800;
  /* color: black; */
  font-family: Arial, Helvetica, sans-serif;
  /* font-family: "Pacifico", cursive; */
  font-size: 1.25rem;
}

</style>
  