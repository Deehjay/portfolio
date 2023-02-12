<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <router-view :key="$route.path"></router-view>
</template>

<style>
template {
  max-height: 100vh;
}
</style>
