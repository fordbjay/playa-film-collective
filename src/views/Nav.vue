<template>
    <div class="nav-container">
      <RouterLink to="/" class="nav-link">HOME</RouterLink>
      <RouterLink to="/about" class="nav-link">ABOUT</RouterLink>
    </div>
</template>

<script>

</script>

<style>
 .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
 }

 .nav-link {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    text-decoration: none;
 }
</style>