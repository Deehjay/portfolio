<script setup>
import { projects } from "../projects.js";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <main>
    <ProjectCard
      v-for="project in projects"
      :projectName="project.projectName"
      :slug="project.slug"
      :cardImage="project.cardImage" />
  </main>
</template>
