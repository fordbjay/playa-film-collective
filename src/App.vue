<template>

      <div>
        <div class="page-content">
          <RouterView />
        </div>
      </div>

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

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

/* .page-content {
  padding-top: 200px;
} */

</style>