<script setup>
defineProps({
  text: String,
  internal: Boolean,
  link: String,
});
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

<style></style>
