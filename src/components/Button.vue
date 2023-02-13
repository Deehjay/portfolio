<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    internal: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <router-link
    v-if="internal"
    :to="link"
    class="text-white bg-gray-600 p-4 uppercase text-center drop-shadow-lg">
    {{ text }}</router-link
  >
  <a
    v-else
    :href="link"
    class="text-white bg-gray-600 p-4 text-center uppercase drop-shadow-lg"
    target="_blank"
    >{{ text }}</a
  >
</template>

<style scoped>
a {
  transition: all 0.5s ease;
}

a:hover {
  background-color: #4b6163;
}
</style>
