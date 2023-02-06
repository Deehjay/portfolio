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
    class="text-white rounded bg-gray-600 p-2 uppercase">
    {{ text }}</router-link
  >
  <a
    v-else
    :href="link"
    class="text-white rounded bg-gray-600 p-2 w-20 text-center uppercase"
    target="_blank"
    >{{ text }}</a
  >
</template>
