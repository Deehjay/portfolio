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
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<template>
  <router-link
    @click.native="scrollToTop"
    class="text-white bg-gray-600 p-4 uppercase text-center drop-shadow-lg rounded text-xl laptop:text-base laptop:p-3 phone:text-base phone:p-2 tablet:text-base"
    :to="`/work/${nextProject}`"
    >Next Project</router-link
  >
</template>

<style scoped>
a {
  transition: all 0.5s ease;
}

a:hover {
  background-color: #68cc8c;
  color: #333d4d;
}
</style>
