<template>
  <div>
    <Nav></Nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/Nav.vue'
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}


</style>