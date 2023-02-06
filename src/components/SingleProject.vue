<script>
import { projects } from "../projects.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Button from "../components/Button.vue";

export default {
  components: { VueperSlides, VueperSlide, Button },
  data() {
    const queryString = window.location.pathname.slice(6);

    const projectDetails = projects.filter(
      (project) => project.slug === queryString
    )[0];

    const slides = projectDetails.images.map((image) => {
      return { image };
    });

    return {
      slides,
      projectDetails,
    };
  },
};
</script>

<template>
  <div class="container flex justify-center items-center gap-20">
    <div class="w-1/3">
      <VueperSlides
        class="no-shadow"
        arrows-inside
        fade
        :touchable="false"
        fixed-height="320px"
        bullets-outside
        transition-speed="250">
        <VueperSlide
          v-for="(slide, i) in slides"
          :slide-ratio="337 / 599"
          :key="i"
          :title="slide.title"
          :image="slide.image"
          :content="slide.content"
          :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
        </VueperSlide>
      </VueperSlides>
    </div>
    <div>
      <div
        class="flex flex-col justify-center items-center max-w-md gap-1 shadow-xl p-3 rounded-xl">
        <h1 class="text-2xl">{{ projectDetails.projectName }}</h1>
        <h2 class="text-lg">{{ projectDetails.summary }}</h2>
        <p class="text-xs" t>{{ projectDetails.longDescription }}</p>
        <h3 class="text-base">Tech Stack:</h3>
        <div class="flex gap-10">
          <div v-if="projectDetails.tech.fe">
            <p class="text-sm text-center mb-1">Front-End</p>
            <ul class="text-xs text-center">
              <li v-for="tech in projectDetails.tech.fe">
                {{ tech }}
              </li>
            </ul>
          </div>
          <div v-if="projectDetails.tech.be">
            <p class="text-sm mb-1">Back-End</p>
            <ul class="text-xs text-center">
              <li v-for="tech in projectDetails.tech.be">{{ tech }}</li>
            </ul>
          </div>
        </div>
        <div class="flex gap-10">
          <Button text="GitHub" :link="projectDetails.github" />
          <Button
            v-if="projectDetails.prod"
            text="Live"
            :link="projectDetails.prod" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}

.vueper-container {
  width: 200px;
}
</style>
