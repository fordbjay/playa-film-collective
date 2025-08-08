<template>

  <!-- <navBar /> -->

  <RouterView />



</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';
import navBar from './components/nav-bar.vue'

</script>

<style>

* {
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

</style>