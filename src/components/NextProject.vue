<script>
export default {
  props: { currProject: String },
  computed: {
    nextProject() {
      const projects = [
        "know-it-all",
        "portfolio",
        "house-of-games-api",
        "house-of-games",
      ];
      const currentIndex = projects.indexOf(this.currProject);
      return projects[(currentIndex + 1) % projects.length];
    },
  },
};
</script>

<template>
  <router-link
    class="text-white bg-gray-600 p-4 uppercase text-center drop-shadow-lg"
    :to="`/work/${nextProject}`"
    >Next Project</router-link
  >
</template>
