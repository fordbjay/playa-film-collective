<template>

  <!-- <navBar /> -->
  <!-- <navBarMobile/> -->

  <RouterView />



</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';
import navBar from './components/nav-bar.vue'
import navBarMobile from './components/nav-bar-mobile.vue';

</script>

<style>

* {
  padding: 0;
  margin: 0;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

</style>