<template>
  <nav class="p-10 tracking-wider">
    <router-link
      aria-label="About page"
      class="hover-underline-animation text-neutralColour"
      to="/about"
      >About</router-link
    >
    <router-link
      aria-label="Projects page"
      class="hover-underline-animation text-neutralColour"
      id="nav-2nd-child"
      to="/work"
      >Work</router-link
    >
    <div class="name-accent-container">
      <router-link to="/" aria-label="Home page"
        ><span
          class="text-7xl font-sans font-bold name-accent glow laptop:text-6xl"
          >D</span
        ></router-link
      >
    </div>

    <router-link
      aria-label="Contact page"
      class="hover-underline-animation text-neutralColour"
      to="/contact"
      >Contact</router-link
    >
    <a
      aria-label="My CV"
      class="hover-underline-animation text-neutralColour"
      href="/CV/Daniel-James-CV.pdf"
      target="_blank"
      >CV</a
    >
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
  animation: fadeIn 0.8s;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ecf3f3;
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

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #333d4d;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media screen and (min-width: 1024px) and (max-width: 1600px) {
  nav {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  nav {
    font-size: 1.2rem;
  }
}
</style>
