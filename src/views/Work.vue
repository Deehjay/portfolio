<script setup>
import { projects } from "../projects.js";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <main>
    <div class="projects-container flex justify-center items-center">
      <div
        class="projects-inner w-1/2 flex items-center justify-center flex-wrap">
        <ProjectCard
          v-for="project in projects"
          :projectName="project.projectName"
          :slug="project.slug"
          :cardImage="project.cardImage"
          :cardHeading="project.cardHeading" />
      </div>
    </div>
  </main>
</template>

<style>
.projects-container {
  height: 91vh;
}

.projects-inner {
  max-height: 100%;
  opacity: 0;
  animation: fadeIn 2s;
  animation-fill-mode: forwards;
}
</style>
