<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      tech: [
        { names: ["javascript", "html5", "css3"], type: "languages" },
        {
          names: ["react", "vuejs", "svelte", "tailwindcss"],
          type: "frontEnd",
        },
        {
          names: ["express", "nodejs", "mongodb", "postgresql", "firebase"],
          type: "backEnd",
        },
        { names: ["jest", "git", "bash"], type: "tools" },
      ],
    };
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
  <main>
    <section
      class="about-container flex flex-col justify-center items-center gap-12 laptop:p-4 tablet:p-4 phone:p-0 phone:gap-4">
      <div>
        <h1
          class="header-fadein text-5xl font-sans font-bold uppercase tracking-wider laptop:mt-4 laptop:text-4xl tablet:mt-4 tablet:text-4xl">
          <span class="name-accent">A</span>bout me
        </h1>
      </div>
      <div
        class="w-3/4 flex justify-center items-center gap-12 laptop:flex-col laptop:gap-8 laptop:p-4 laptop:w-3/4 tablet:flex-col tablet:gap-8 tablet:p-4 tablet:w-3/4 phone:w-full phone:gap-2">
        <div
          class="content-left w-2/5 flex flex-col items-center bg-gray-100 rounded p-4 laptop:flex-row laptop:w-full laptop:gap-2 tablet:flex-col tablet:w-full">
          <div
            class="flex gap-8 items-center laptop:gap-4 tablet:gap-4 phone:flex-col">
            <div id="avatar"></div>
            <div
              class="flex flex-col gap-1 rounded p-4 phone:items-center phone:text-center phone:gap-4">
              <div>
                <h2 class="uppercase text-base font-bold tracking-widest">
                  I'm
                </h2>
                <p
                  class="text-xl leading-8 tracking-wider uppercase laptop:text-lg tablet:text-lg">
                  Daniel James
                </p>
              </div>
              <div>
                <h2 class="uppercase text-base font-bold tracking-widest">
                  I'm a
                </h2>
                <p
                  class="s text-xl leading-8 tracking-wider uppercase laptop:text-lg tablet:text-lg">
                  Junior Developer
                </p>
              </div>
              <div>
                <h2 class="uppercase text-base font-bold tracking-widest">
                  I'm from
                </h2>
                <p
                  class="text-xl leading-8 tracking-wider uppercase laptop:text-lg tablet:text-lg">
                  Nottingham, UK
                </p>
              </div>
              <div>
                <h2 class="uppercase text-base font-bold tracking-widest">
                  reach me on
                </h2>
                <a
                  href="mailto:danielcjamesdj@gmail.com"
                  class="email-link text-xl tracking-wider underline laptop:text-lg tablet:text-lg"
                  >danielcjamesdj@gmail.com</a
                >

                <div class="flex gap-4 mt-2 justify-start phone:justify-center">
                  <a
                    aria-label="My GitHub profile"
                    href="https://github.com/Deehjay"
                    ><i
                      class="social-icon devicon-github-original text-4xl laptop:text-4xl tablet:text-4xl"></i
                  ></a>
                  <a
                    aria-label="My LinkedIn profile"
                    href="https://www.linkedin.com/in/daniel-james-6a9928173/"
                    ><i
                      class="social-icon devicon-linkedin-plain text-4xl laptop:text-4xl tablet:text-4xl"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center rounded p-4 w-full gap-4">
            <div>
              <h2
                class="text-3xl font-bold tracking-wider uppercase text-emerald laptop:text-2xl tablet:text-2xl phone:text-lg">
                tech i've worked with
              </h2>
            </div>
            <div v-for="item in tech">
              <h2
                class="text-xl font-bold text-secondary tracking-wider uppercase text-center mb-4 laptop:text-lg tablet:text-lg phone:text-lg">
                {{ item.type }}
              </h2>
              <div class="flex w-1/2 gap-4 phone:justify-center phone:w-full">
                <div v-for="tool in item.names" class="tooltip">
                  <i
                    :class="`devicon-${tool}-plain devicon-${tool}-original text-5xl text-neutralColour laptop:text-3xl tablet:text-3xl phone:text-3xl`"></i>
                  <span class="tooltiptext">{{ tool }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="content-right w-1/2 flex flex-col items-center rounded p-4 gap-8 laptop:w-full tablet:w-full">
          <div class="rounded w-full text-center p-4">
            <h2
              class="font-bold text-4xl text-emerald uppercase tracking-wider phone:text-2xl">
              This is who I am...
            </h2>
          </div>
          <div>
            <h3
              class="text-xl italic text-gray-400 font-bold phone:text-lg text-center">
              Junior Full Stack Developer from Nottingham, UK
            </h3>
          </div>
          <div>
            <p class="text-lg mb-4">
              Hi, I'm Dan. I'm a Junior Full Stack Developer who's recently
              graduated from the award-winning Software Development bootcamp
              provided by Northcoders. I'm now looking to progress with this
              newfound passion of mine and spearhead into a career in
              development, and I am
              <span class="font-bold"
                >currently seeking a Junior Developer role</span
              >
              at a company whose values align with my own. I'm diligent and a
              hard worker, and pay extra care to
              <span class="font-bold">attention to detail</span>. I love to work
              <span class="font-bold">collaboratively</span> and in an
              environment where <span class="font-bold">growth</span> is
              important and <span class="font-bold">transparency</span> is key.
            </p>
            <p class="text-lg mb-4">
              During my time with Northcoders I acquired a solid understanding
              of the fundamentals of vanilla JavaScript, and also got to learn a
              bunch of other cool tech, including React.js, Express.js, Node.js,
              and PSQL to name a few. I'm always keen to learn new and exciting
              tech - no matter how bad the documentation may be...
            </p>
            <p class="text-lg">
              Outside of coding, I'll admit; I'm a bit of a nerd. I love video
              games
              <span class="italic"
                >(OldSchool RuneScape in particular - get in touch if you play,
                I'd love to have a chat)</span
              >, trading card games, and I'm probably the biggest Red Hot Chili
              Peppers fan on this side of the River Trent. I also play electric
              guitar, am a massive horror/true crime fanatic, and I love
              concert-going.
            </p>
          </div>
          <div class="flex gap-4 self-end phone:self-center">
            <Button text="My projects" :internal="true" link="/work" />
            <Button text="Hire me" :internal="true" link="/contact" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.social-icon,
.email-link {
  transition: all 0.5s ease;
}

.social-icon:hover,
.email-link:hover {
  color: #68cc8c;
}

.header-fadein {
  opacity: 0;
  animation: fadeIn 0.7s;
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
}

.about-container {
  height: 90vh;
}

#avatar {
  background-image: url("/me-cropped.png");
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-size: cover;
  background-image: top center;
  border: 5px solid #68cc8c;
}

.content-left {
  opacity: 0;
  animation: slideInFromLeft 0.5s;
  animation-fill-mode: forwards;
}

.content-right {
  opacity: 0;
  animation: slideInFromRight 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
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

@media only screen and (min-width: 1024px) and (max-width: 1600px) {
  .about-container {
    height: 100%;
  }

  #avatar {
    height: 200px;
    width: 200px;
  }
}

@media only screen and (max-width: 820px) {
  .about-container {
    height: 100%;
  }

  #avatar {
    height: 200px;
    width: 200px;
  }
}
</style>
