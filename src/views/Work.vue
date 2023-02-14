<script setup>
import { projects } from "../projects.js";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <main>
    <section class="projects-container flex justify-center items-center">
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
.projects-container {
  height: 90vh;
}

.projects-inner {
  max-height: 100%;
  opacity: 0;
  animation: slideInFromRight 1s;
  animation-fill-mode: forwards;
}
</style>
