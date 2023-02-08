<template>
  <nav class="p-5">
    <router-link to="/about">About</router-link>
    <router-link id="nav-2nd-child" to="/work">Work</router-link>
    <div class="name-accent-container">
      <router-link to="/"
        ><span class="text-5xl font-sans font-bold name-accent glow"
          >D</span
        ></router-link
      >
    </div>

    <router-link to="/contact">Contact</router-link>
    <router-link to="/contact">CV</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 9vh;
  text-transform: uppercase;
  animation: fadeIn 0.8s;
}

#nav-2nd-child {
  margin-right: 4px;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.name-accent-container a span:hover {
  color: #3eb868;
}

.name-accent-container a span {
  transition: all 0.5s ease;
}

nav .router-link-exact-active {
  color: #68cc8c;
}
</style>
