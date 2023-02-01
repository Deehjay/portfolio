<template>
  <main>
    <div class="container flex items-center justify-center gap-20">
      <div class="w-100">
        <img
          src="src/assets/me-cropped.png"
          class="shadow-xl me-img h-20 rounded-xl" />
      </div>
      <div
        class="flex flex-col justify-center items-center max-w-md gap-1 shadow-xl p-3 rounded-xl">
        <h1 class="text-2xl">Hi 👋, I'm Dan!</h1>
        <p class="text-xs">
          Having grown up in the 'golden age' of the internet in the early
          2000s, I've always had a deep interest and connection with all things
          tech. Ever since being shown the world of Habbo Hotel in 2003
          (shoutout anyone who played!) I fell in love with tech and its
          seemingly endless capabilities.
        </p>
        <p class="text-xs">
          At long last, in 2022, I decided to take the plunge and turn this
          lifelong passion into a career. I quit my stable job and enrolled on
          the award-winning bootcamp, Northcoders, through which I've been able
          to learn a bunch of cool tech. I'm now keen to get my foot stuck in
          the door and begin my journey as a junior developer!
        </p>
        <h2 class="text-base">What I've Worked With:</h2>
        <div class="flex gap-10">
          <div>
            <p class="text-sm text-center mb-1">Front-End</p>
            <ul class="text-xs text-center">
              <li>JavaScript (ES6)</li>
              <li>React.js</li>
              <li>Svelte</li>
              <li>Vue.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div>
            <p class="text-sm text-center mb-1">Back-End</p>
            <ul class="text-xs text-center">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB + Atlas</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <p class="text-sm text-center mb-1">Tools</p>
            <ul class="text-xs text-center">
              <li>Jest</li>
              <li>Git</li>
              <li>Bash</li>
              <li>Trello</li>
              <li>Figma</li>
              <li>Insomnia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 95vh;
}

.me-img {
  width: 220px;
  height: 200px;
}
</style>
