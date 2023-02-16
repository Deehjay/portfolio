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
    class="text-white bg-gray-600 p-4 uppercase text-center drop-shadow-lg text-xl rounded laptoplg:text-lg laptoplg:p-2 phone:text-base">
    {{ text }}</router-link
  >
  <a
    v-else
    :href="link"
    class="text-white bg-gray-600 p-3 text-center uppercase drop-shadow-lg rounded phone:text-base"
    target="_blank"
    >{{ text }}</a
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
