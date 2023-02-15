<script setup>
import { projects } from "../projects.js";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <main>
    <section
      class="projects-container flex flex-col justify-center items-center gap-12 phone:gap-4">
      <div>
        <h1
          class="header-fadein text-5xl font-sans font-bold uppercase tracking-wider phone:mt-4 text-5xl phone:ml-4">
          <span class="name-accent">P</span>rojects
        </h1>
      </div>
      <div
        class="projects-inner w-1/2 flex items-center justify-center flex-wrap tablet:w-2/3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :projectName="project.projectName"
          :slug="project.slug"
          :cardImage="project.cardImage"
          :cardHeading="project.cardHeading" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.header-fadein {
  opacity: 0;
  animation: fadeIn 0.7s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
.projects-container {
  height: 88vh;
}

.projects-inner {
  max-height: 100%;
  opacity: 0;
  animation: slideInFromRight 0.5s;
  animation-fill-mode: forwards;
}

@media screen and (max-width: 480px) {
  .projects-container {
    height: 100%;
  }
}

@media screen and (max-width: 1280px) {
  h1 {
    margin-top: 1rem;
  }
}
</style>
