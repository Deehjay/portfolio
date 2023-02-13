<script>
import { projects } from "../projects.js";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Button from "../components/Button.vue";
import NextProject from "./NextProject.vue";

export default {
  components: { VueperSlides, VueperSlide, Button, NextProject },
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
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
  <main>
    <section class="project-container flex justify-center items-center">
      <div class="w-full flex justify-center gap-52">
        <div class="w-1/3 content-left">
          <div>
            <VueperSlides
              class="no-shadow"
              arrows-inside
              fade
              :touchable="false"
              fixed-height="620px"
              bullets-outside
              transition-speed="250">
              <VueperSlide
                v-for="(slide, i) in slides"
                :key="i"
                :title="slide.title"
                :image="slide.image"
                :content="slide.content"
                :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
              </VueperSlide>
            </VueperSlides>
          </div>
        </div>
        <div class="content-right w-1/3 flex flex-col items-center gap-8">
          <div class="w-full bg-gray-200 p-4">
            <h1
              class="text-emerald mb-4 w-full uppercase text-center text-5xl font-bold tracking-wider">
              {{ projectDetails.projectName }}
            </h1>
            <div>
              <div class="flex gap-8 justify-center">
                <div v-for="tech in projectDetails.tech" class="tooltip">
                  <i
                    :class="`devicon-${tech}-plain devicon-${tech}-original text-5xl text-neutralColour`"></i>
                  <span class="tooltiptext">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-xl italic text-gray-400 font-bold">
            {{ projectDetails.summary }}
          </h2>
          <p class="text-lg text-justify">
            {{ projectDetails.longDescriptionP1 }}
          </p>
          <p class="text-lg text-justify">
            {{ projectDetails.longDescriptionP2 }}
          </p>

          <div class="w-full flex justify-center items-center gap-10 mt-4">
            <div>
              <Button
                text="live view"
                :internal="false"
                :link="projectDetails.prod" />
            </div>
            <div>
              <Button
                text="source code"
                :internal="false"
                :link="projectDetails.github" />
            </div>
          </div>
          <NextProject class="self-end" :currProject="projectDetails.slug" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.content-left {
  animation: slideInFromBottom 0.7s;
}

.content-right {
  animation: slideInFromTop 0.7s;
}
.project-container {
  height: 90vh;
  overflow: hidden;
}

.test {
  width: 1000px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
