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
    title() {
      const url = this.$route.path;
      const parts = url.split("/");
      const lastPart = parts[parts.length - 1];
      return lastPart
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .trim();
    },
  },
};
</script>

<template>
  <router-link
    @click.native="$scrollBehaviour"
    class="text-white bg-gray-600 p-4 uppercase text-center drop-shadow-lg rounded"
    :to="`/work/${nextProject}`"
    >Next Project</router-link
  >
</template>
