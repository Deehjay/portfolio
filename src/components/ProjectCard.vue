<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    cardImage: {
      type: String,
      required: true,
    },
    cardHeading: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <figure class="snip1577">
    <img v-bind:src="cardImage" alt="sample99" />
    <figcaption>
      <h3>{{ projectName }}</h3>
      <h4>{{ cardHeading }}</h4>
    </figcaption>
    <router-link :to="`/work/${slug}`"></router-link>
  </figure>
</template>

<style scoped>
.snip1577 {
  font-family: "Montserrat", Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  min-width: 400px;
  max-width: 410px;
  min-height: 400px;
  max-width: 410px;
  width: 100%;
  color: black;
  text-align: left;
  font-size: 16px;
  background: rgba(0, 0, 0, 0);
}

.snip1577 *,
.snip1577:before,
.snip1577:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.snip1577 img {
  max-width: 100%;
  backface-visibility: hidden;
  vertical-align: top;
  max-height: 10%;
}

.snip1577:before,
.snip1577:after {
  position: absolute;
  top: 20px;
  right: 20px;
  content: "";
  background-color: black;
  z-index: 1;
  opacity: 0;
}

.snip1577:before {
  width: 0;
  height: 1px;
}

.snip1577:after {
  height: 0;
  width: 1px;
}

.snip1577 figcaption {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 30px 20px;
}

.snip1577 h3,
.snip1577 h4 {
  margin: 0;
  font-size: 2em;
  font-weight: normal;
  opacity: 0;
}

.snip1577 h4 {
  font-size: 1.2em;
  text-transform: uppercase;
}

.snip1577 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.snip1577:hover img,
.snip1577.hover img {
  zoom: 1;
  filter: alpha(opacity=20);
  -webkit-opacity: 0.2;
  opacity: 0.2;
}

.snip1577:hover:before,
.snip1577.hover:before,
.snip1577:hover:after,
.snip1577.hover:after {
  opacity: 1;
  -webkit-transition-delay: 0.25s;
  transition-delay: 0.25s;
}

.snip1577:hover:before,
.snip1577.hover:before {
  width: 40px;
}

.snip1577:hover:after,
.snip1577.hover:after {
  height: 40px;
}

.snip1577:hover h3,
.snip1577.hover h3,
.snip1577:hover h4,
.snip1577.hover h4 {
  opacity: 1;
}

.snip1577:hover h3,
.snip1577.hover h3 {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.snip1577:hover h4,
.snip1577.hover h4 {
  -webkit-transition-delay: 0.35s;
  transition-delay: 0.35s;
}
@media screen and (max-width: 1024px) {
  .snip1577 {
    min-width: 220px;
    max-width: 230px;
    min-height: 220px;
    max-width: 230px;
  }

  .snip1577 h3,
  .snip1577 h4 {
    font-size: 1.3em;
  }

  .snip1577 h4 {
    font-size: 0.75em;
  }
}
</style>
