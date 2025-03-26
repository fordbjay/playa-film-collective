<template>
    <div class="nav-container">
      <div class="links">
         <RouterLink to="/about" class="nav-link">About</RouterLink>
         <RouterLink to="/films" class="nav-link">Films</RouterLink>
         <RouterLink to="/" class="nav-link"><img src="../assets/pfc-logo.png" alt="logo" class="logo"></RouterLink>
         <RouterLink to="/news" class="nav-link">News</RouterLink>
         <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </div>
    
    </div>
</template>

<script>

</script>

<style scoped>
 .nav-container {
   position: fixed; /* Keeps it on top */
  top: 0;
  left: 0;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it stays above everything */
  padding: 0 20px;
 }

 .links {
   display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
 }

 .nav-link {
    font-family:'tropical taste demo';
    color: black;
    font-size: 25px;
    text-decoration: none;
 }

 .logo {
   width: 175px;
   /* filter: invert(100); */
 }

</style>