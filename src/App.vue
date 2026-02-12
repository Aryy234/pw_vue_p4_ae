<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background: #f7fafc !important;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  grid-template-columns: unset !important;
}
</style>
