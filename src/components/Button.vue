<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button class="text-white rounded bg-gray-600 p-2 uppercase">
    {{ text }}
  </button>
</template>
