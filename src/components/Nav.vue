<template>
  <nav class="">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a href="#">Work</a>
    <a href="#">Contact</a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 5vh;
  text-transform: uppercase;
}
</style>
