<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      particleCount: 30,
    };
  },
};
</script>

<template>
  <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
  <main>
    <div id="particle-container" class="z-0">
      <div v-for="n in particleCount" class="particle z-0"></div>
    </div>
    <section
      class="landing flex flex-wrap items-center justify-center p-2 z-1 relative">
      <header>
        <h1
          class="intro-header text-7xl font-sans font-bold laptop:text-5xl laptoplg:text-5xl">
          <span class="line block w-full">
            Hi!
            <i
              id="wave"
              class="em-svg em-wave"
              role="img"
              aria-label="WAVING HAND SIGN"></i>
            <!-- <span id="wave" class="">👋</span> -->
          </span>
          <span class="line block w-full">
            I'm <span class="name-accent">D</span>an,
          </span>
          <span class="line block w-full"> Junior Software Developer </span>
        </h1>
        <div class="call-to-action">
          <p class="mt-3 mb-3 laptop:text-xl laptoplg:text-xl phone:text-lg">
            Full Stack Developer // Nottingham, UK
          </p>
          <div class="flex gap-4">
            <Button text="Hire me" :internal="true" link="/contact" />
            <Button text="My projects" :internal="true" link="/work" />
          </div>
        </div>
      </header>
    </section>
  </main>
</template>

<style>
.landing {
  height: 90vh;
  overflow: hidden;
}

.em,
.em-svg {
  height: 1em !important;
  width: 1em !important;
  top: 10% !important;
  vertical-align: top !important;
}

.line {
  opacity: 0;
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
  white-space: nowrap;
  animation: fadeInAndMakeFullWidth 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

h1 span:nth-child(1) {
  animation-delay: 0.1s;
}

h1 span:nth-child(2) {
  animation-delay: 1.3s;
}

h1 span:nth-child(3) {
  animation-delay: 2.1s;
}

.call-to-action {
  opacity: 0;
  animation: fadeIn 1s;
  animation-delay: 3.7s;
  animation-fill-mode: forwards;
  font-size: 2rem;
}

#particle-container {
  opacity: 0;
  animation: fadeIn 1s;
  animation-fill-mode: forwards;
}

#wave {
  animation: wave-animation 1s;
  animation-delay: 0.6s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;
}

header {
  width: 100%;
  max-width: 945px;
  margin: 0 auto;
}

.name-accent {
  color: #68cc8c;
  text-shadow: -5px 0 0 #223d30;
}

.container {
  height: 95vh;
}

body {
  background: #ecf3f3;
}

@media screen and (max-width: 1024px) {
  .line {
    height: 50px;
  }

  header {
    max-width: 620px;
  }

  .call-to-action {
    font-size: 1rem;
  }
}

@media screen and (max-width: 1280px) {
  .line {
    height: 50px;
  }

  header {
    max-width: 620px;
  }

  .call-to-action {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .line {
    height: 35px;
  }

  header {
    padding: 4px;
    max-width: 620px;
  }

  .call-to-action {
    font-size: 1rem;
  }

  .intro-header {
    font-size: 1.6rem;
  }
}

.particle {
  position: absolute;
  border-radius: 50%;
}

@-webkit-keyframes particle-animation-1 {
  100% {
    transform: translate3d(43vw, 59vh, 11px);
  }
}

@keyframes particle-animation-1 {
  100% {
    transform: translate3d(43vw, 59vh, 11px);
  }
}
.particle:nth-child(1) {
  -webkit-animation: particle-animation-1 60s infinite;
  animation: particle-animation-1 60s infinite;
  opacity: 0.84;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
  transform: translate3d(56vw, 48vh, 70px);
  background: #5fd926;
}

@-webkit-keyframes particle-animation-2 {
  100% {
    transform: translate3d(82vw, 14vh, 24px);
  }
}

@keyframes particle-animation-2 {
  100% {
    transform: translate3d(82vw, 14vh, 24px);
  }
}
.particle:nth-child(2) {
  -webkit-animation: particle-animation-2 60s infinite;
  animation: particle-animation-2 60s infinite;
  opacity: 0.65;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
  transform: translate3d(17vw, 49vh, 52px);
  background: #d98226;
}

@-webkit-keyframes particle-animation-3 {
  100% {
    transform: translate3d(6vw, 77vh, 5px);
  }
}

@keyframes particle-animation-3 {
  100% {
    transform: translate3d(6vw, 77vh, 5px);
  }
}
.particle:nth-child(3) {
  -webkit-animation: particle-animation-3 60s infinite;
  animation: particle-animation-3 60s infinite;
  opacity: 0.21;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
  transform: translate3d(27vw, 51vh, 69px);
  background: #d92691;
}

@-webkit-keyframes particle-animation-4 {
  100% {
    transform: translate3d(72vw, 18vh, 98px);
  }
}

@keyframes particle-animation-4 {
  100% {
    transform: translate3d(72vw, 18vh, 98px);
  }
}
.particle:nth-child(4) {
  -webkit-animation: particle-animation-4 60s infinite;
  animation: particle-animation-4 60s infinite;
  opacity: 0.87;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  transform: translate3d(29vw, 25vh, 45px);
  background: #3ed926;
}

@-webkit-keyframes particle-animation-5 {
  100% {
    transform: translate3d(68vw, 55vh, 17px);
  }
}

@keyframes particle-animation-5 {
  100% {
    transform: translate3d(68vw, 55vh, 17px);
  }
}
.particle:nth-child(5) {
  -webkit-animation: particle-animation-5 60s infinite;
  animation: particle-animation-5 60s infinite;
  opacity: 0.86;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  transform: translate3d(11vw, 66vh, 64px);
  background: #8526d9;
}

@-webkit-keyframes particle-animation-6 {
  100% {
    transform: translate3d(85vw, 55vh, 7px);
  }
}

@keyframes particle-animation-6 {
  100% {
    transform: translate3d(85vw, 55vh, 7px);
  }
}
.particle:nth-child(6) {
  -webkit-animation: particle-animation-6 60s infinite;
  animation: particle-animation-6 60s infinite;
  opacity: 0.81;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
  transform: translate3d(81vw, 66vh, 34px);
  background: #26d9b5;
}

@-webkit-keyframes particle-animation-7 {
  100% {
    transform: translate3d(79vw, 5vh, 23px);
  }
}

@keyframes particle-animation-7 {
  100% {
    transform: translate3d(79vw, 5vh, 23px);
  }
}
.particle:nth-child(7) {
  -webkit-animation: particle-animation-7 60s infinite;
  animation: particle-animation-7 60s infinite;
  opacity: 0.86;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -1.4s;
  animation-delay: -1.4s;
  transform: translate3d(37vw, 6vh, 37px);
  background: #d92665;
}

@-webkit-keyframes particle-animation-8 {
  100% {
    transform: translate3d(31vw, 68vh, 18px);
  }
}

@keyframes particle-animation-8 {
  100% {
    transform: translate3d(31vw, 68vh, 18px);
  }
}
.particle:nth-child(8) {
  -webkit-animation: particle-animation-8 60s infinite;
  animation: particle-animation-8 60s infinite;
  opacity: 0.11;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -1.6s;
  animation-delay: -1.6s;
  transform: translate3d(50vw, 72vh, 30px);
  background: #68d926;
}

@-webkit-keyframes particle-animation-9 {
  100% {
    transform: translate3d(10vw, 7vh, 31px);
  }
}

@keyframes particle-animation-9 {
  100% {
    transform: translate3d(10vw, 7vh, 31px);
  }
}
.particle:nth-child(9) {
  -webkit-animation: particle-animation-9 60s infinite;
  animation: particle-animation-9 60s infinite;
  opacity: 0.66;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -1.8s;
  animation-delay: -1.8s;
  transform: translate3d(40vw, 78vh, 55px);
  background: #26b5d9;
}

@-webkit-keyframes particle-animation-10 {
  100% {
    transform: translate3d(79vw, 28vh, 47px);
  }
}

@keyframes particle-animation-10 {
  100% {
    transform: translate3d(79vw, 28vh, 47px);
  }
}
.particle:nth-child(10) {
  -webkit-animation: particle-animation-10 60s infinite;
  animation: particle-animation-10 60s infinite;
  opacity: 0.51;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
  transform: translate3d(13vw, 11vh, 55px);
  background: #d95626;
}

@-webkit-keyframes particle-animation-11 {
  100% {
    transform: translate3d(89vw, 3vh, 66px);
  }
}

@keyframes particle-animation-11 {
  100% {
    transform: translate3d(89vw, 3vh, 66px);
  }
}
.particle:nth-child(11) {
  -webkit-animation: particle-animation-11 60s infinite;
  animation: particle-animation-11 60s infinite;
  opacity: 0.15;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -2.2s;
  animation-delay: -2.2s;
  transform: translate3d(42vw, 7vh, 93px);
  background: #2629d9;
}

@-webkit-keyframes particle-animation-12 {
  100% {
    transform: translate3d(74vw, 51vh, 27px);
  }
}

@keyframes particle-animation-12 {
  100% {
    transform: translate3d(74vw, 51vh, 27px);
  }
}
.particle:nth-child(12) {
  -webkit-animation: particle-animation-12 60s infinite;
  animation: particle-animation-12 60s infinite;
  opacity: 0.61;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
  transform: translate3d(84vw, 11vh, 36px);
  background: #b8d926;
}

@-webkit-keyframes particle-animation-13 {
  100% {
    transform: translate3d(46vw, 70vh, 34px);
  }
}

@keyframes particle-animation-13 {
  100% {
    transform: translate3d(46vw, 70vh, 34px);
  }
}
.particle:nth-child(13) {
  -webkit-animation: particle-animation-13 60s infinite;
  animation: particle-animation-13 60s infinite;
  opacity: 0.57;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -2.6s;
  animation-delay: -2.6s;
  transform: translate3d(17vw, 57vh, 82px);
  background: #d926b8;
}

@-webkit-keyframes particle-animation-14 {
  100% {
    transform: translate3d(3vw, 6vh, 45px);
  }
}

@keyframes particle-animation-14 {
  100% {
    transform: translate3d(3vw, 6vh, 45px);
  }
}
.particle:nth-child(14) {
  -webkit-animation: particle-animation-14 60s infinite;
  animation: particle-animation-14 60s infinite;
  opacity: 0.37;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -2.8s;
  animation-delay: -2.8s;
  transform: translate3d(29vw, 14vh, 72px);
  background: #bb26d9;
}

@-webkit-keyframes particle-animation-15 {
  100% {
    transform: translate3d(13vw, 52vh, 30px);
  }
}

@keyframes particle-animation-15 {
  100% {
    transform: translate3d(13vw, 52vh, 30px);
  }
}
.particle:nth-child(15) {
  -webkit-animation: particle-animation-15 60s infinite;
  animation: particle-animation-15 60s infinite;
  opacity: 0.62;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -3s;
  animation-delay: -3s;
  transform: translate3d(39vw, 13vh, 30px);
  background: #d92626;
}

@-webkit-keyframes particle-animation-16 {
  100% {
    transform: translate3d(16vw, 6vh, 87px);
  }
}

@keyframes particle-animation-16 {
  100% {
    transform: translate3d(16vw, 6vh, 87px);
  }
}
.particle:nth-child(16) {
  -webkit-animation: particle-animation-16 60s infinite;
  animation: particle-animation-16 60s infinite;
  opacity: 0.75;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -3.2s;
  animation-delay: -3.2s;
  transform: translate3d(77vw, 12vh, 65px);
  background: #71d926;
}

@-webkit-keyframes particle-animation-17 {
  100% {
    transform: translate3d(49vw, 39vh, 71px);
  }
}

@keyframes particle-animation-17 {
  100% {
    transform: translate3d(49vw, 39vh, 71px);
  }
}
.particle:nth-child(17) {
  -webkit-animation: particle-animation-17 60s infinite;
  animation: particle-animation-17 60s infinite;
  opacity: 0.06;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -3.4s;
  animation-delay: -3.4s;
  transform: translate3d(58vw, 87vh, 79px);
  background: #5c26d9;
}

@-webkit-keyframes particle-animation-18 {
  100% {
    transform: translate3d(76vw, 31vh, 70px);
  }
}

@keyframes particle-animation-18 {
  100% {
    transform: translate3d(76vw, 31vh, 70px);
  }
}
.particle:nth-child(18) {
  -webkit-animation: particle-animation-18 60s infinite;
  animation: particle-animation-18 60s infinite;
  opacity: 0.89;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
  transform: translate3d(89vw, 2vh, 93px);
  background: #d95c26;
}

@-webkit-keyframes particle-animation-19 {
  100% {
    transform: translate3d(51vw, 89vh, 56px);
  }
}

@keyframes particle-animation-19 {
  100% {
    transform: translate3d(51vw, 89vh, 56px);
  }
}
.particle:nth-child(19) {
  -webkit-animation: particle-animation-19 60s infinite;
  animation: particle-animation-19 60s infinite;
  opacity: 0.28;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -3.8s;
  animation-delay: -3.8s;
  transform: translate3d(70vw, 18vh, 96px);
  background: #d9be26;
}

@-webkit-keyframes particle-animation-20 {
  100% {
    transform: translate3d(50vw, 79vh, 24px);
  }
}

@keyframes particle-animation-20 {
  100% {
    transform: translate3d(50vw, 79vh, 24px);
  }
}
.particle:nth-child(20) {
  -webkit-animation: particle-animation-20 60s infinite;
  animation: particle-animation-20 60s infinite;
  opacity: 0.28;
  height: 8px;
  width: 8px;
  -webkit-animation-delay: -4s;
  animation-delay: -4s;
  transform: translate3d(29vw, 80vh, 37px);
  background: #d92656;
}

@-webkit-keyframes particle-animation-21 {
  100% {
    transform: translate3d(25vw, 61vh, 81px);
  }
}

@keyframes particle-animation-21 {
  100% {
    transform: translate3d(25vw, 61vh, 81px);
  }
}
.particle:nth-child(21) {
  -webkit-animation: particle-animation-21 60s infinite;
  animation: particle-animation-21 60s infinite;
  opacity: 0.26;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -4.2s;
  animation-delay: -4.2s;
  transform: translate3d(5vw, 37vh, 25px);
  background: #a626d9;
}

@-webkit-keyframes particle-animation-22 {
  100% {
    transform: translate3d(29vw, 11vh, 73px);
  }
}

@keyframes particle-animation-22 {
  100% {
    transform: translate3d(29vw, 11vh, 73px);
  }
}
.particle:nth-child(22) {
  -webkit-animation: particle-animation-22 60s infinite;
  animation: particle-animation-22 60s infinite;
  opacity: 0.27;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -4.4s;
  animation-delay: -4.4s;
  transform: translate3d(40vw, 83vh, 17px);
  background: #8bd926;
}

@-webkit-keyframes particle-animation-23 {
  100% {
    transform: translate3d(74vw, 23vh, 10px);
  }
}

@keyframes particle-animation-23 {
  100% {
    transform: translate3d(74vw, 23vh, 10px);
  }
}
.particle:nth-child(23) {
  -webkit-animation: particle-animation-23 60s infinite;
  animation: particle-animation-23 60s infinite;
  opacity: 0.1;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -4.6s;
  animation-delay: -4.6s;
  transform: translate3d(35vw, 33vh, 90px);
  background: #2680d9;
}

@-webkit-keyframes particle-animation-24 {
  100% {
    transform: translate3d(72vw, 2vh, 72px);
  }
}

@keyframes particle-animation-24 {
  100% {
    transform: translate3d(72vw, 2vh, 72px);
  }
}
.particle:nth-child(24) {
  -webkit-animation: particle-animation-24 60s infinite;
  animation: particle-animation-24 60s infinite;
  opacity: 0.73;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
  transform: translate3d(59vw, 12vh, 11px);
  background: #d9a326;
}

@-webkit-keyframes particle-animation-25 {
  100% {
    transform: translate3d(81vw, 6vh, 38px);
  }
}

@keyframes particle-animation-25 {
  100% {
    transform: translate3d(81vw, 6vh, 38px);
  }
}
.particle:nth-child(25) {
  -webkit-animation: particle-animation-25 60s infinite;
  animation: particle-animation-25 60s infinite;
  opacity: 0.32;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -5s;
  animation-delay: -5s;
  transform: translate3d(61vw, 42vh, 40px);
  background: #2629d9;
}

@-webkit-keyframes particle-animation-26 {
  100% {
    transform: translate3d(50vw, 2vh, 90px);
  }
}

@keyframes particle-animation-26 {
  100% {
    transform: translate3d(50vw, 2vh, 90px);
  }
}
.particle:nth-child(26) {
  -webkit-animation: particle-animation-26 60s infinite;
  animation: particle-animation-26 60s infinite;
  opacity: 0.93;
  height: 7px;
  width: 7px;
  -webkit-animation-delay: -5.2s;
  animation-delay: -5.2s;
  transform: translate3d(71vw, 78vh, 26px);
  background: #26d982;
}

@-webkit-keyframes particle-animation-27 {
  100% {
    transform: translate3d(76vw, 28vh, 90px);
  }
}

@keyframes particle-animation-27 {
  100% {
    transform: translate3d(76vw, 28vh, 90px);
  }
}
.particle:nth-child(27) {
  -webkit-animation: particle-animation-27 60s infinite;
  animation: particle-animation-27 60s infinite;
  opacity: 0.09;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -5.4s;
  animation-delay: -5.4s;
  transform: translate3d(11vw, 58vh, 43px);
  background: #26afd9;
}

@-webkit-keyframes particle-animation-28 {
  100% {
    transform: translate3d(12vw, 29vh, 50px);
  }
}

@keyframes particle-animation-28 {
  100% {
    transform: translate3d(12vw, 29vh, 50px);
  }
}
.particle:nth-child(28) {
  -webkit-animation: particle-animation-28 60s infinite;
  animation: particle-animation-28 60s infinite;
  opacity: 0.05;
  height: 10px;
  width: 10px;
  -webkit-animation-delay: -5.6s;
  animation-delay: -5.6s;
  transform: translate3d(38vw, 76vh, 92px);
  background: #26d92f;
}

@-webkit-keyframes particle-animation-29 {
  100% {
    transform: translate3d(68vw, 71vh, 43px);
  }
}

@keyframes particle-animation-29 {
  100% {
    transform: translate3d(68vw, 71vh, 43px);
  }
}
.particle:nth-child(29) {
  -webkit-animation: particle-animation-29 60s infinite;
  animation: particle-animation-29 60s infinite;
  opacity: 0.05;
  height: 9px;
  width: 9px;
  -webkit-animation-delay: -5.8s;
  animation-delay: -5.8s;
  transform: translate3d(19vw, 87vh, 99px);
  background: #6ed926;
}

@-webkit-keyframes particle-animation-30 {
  100% {
    transform: translate3d(29vw, 65vh, 44px);
  }
}

@keyframes particle-animation-30 {
  100% {
    transform: translate3d(29vw, 65vh, 44px);
  }
}
.particle:nth-child(30) {
  -webkit-animation: particle-animation-30 60s infinite;
  animation: particle-animation-30 60s infinite;
  opacity: 0.19;
  height: 6px;
  width: 6px;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
  transform: translate3d(46vw, 8vh, 81px);
  background: #9126d9;
}
</style>
