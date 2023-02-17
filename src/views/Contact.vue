<script>
import { postContactEmail } from "../api.js";
import { emailRegex } from "../regex.js";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      formErrors: {
        name: false,
        email: false,
        message: false,
      },
      isLoading: false,
      showModal: false,
      modalMessage: "Message sent successfully!",
      buttonIsDisabled: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      this.formData = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        message: this.$refs.message.value,
      };

      this.formErrors = {
        name: !this.formData.name,
        email: !emailRegex.test(this.formData.email),
        message: !this.formData.message,
      };

      if (Object.values(this.formErrors).every((err) => !err)) {
        this.isLoading = true;
        this.buttonIsDisabled = true;

        try {
          await postContactEmail(this.formData);

          this.modalMessage = "Message sent successfully!";
          this.showModal = true;

          setTimeout(() => {
            this.showModal = false;
          }, 4000);

          this.$refs.contactForm.reset();
        } catch (err) {
          console.error(err);
          this.modalMessage = "Something went wrong!";
          this.showModal = true;
        } finally {
          this.isLoading = false;
          this.buttonIsDisabled = false;
        }
      }
    },
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

  <main>
    <div
      v-if="showModal"
      :class="
        modalMessage === 'Message sent successfully!'
          ? 'modal modal-success'
          : 'modal modal-failure'
      ">
      {{ modalMessage }}
    </div>

    <section
      class="contact-container flex flex-col justify-center items-center gap-12 phone:gap-4">
      <div>
        <h1
          class="header-fadein text-5xl font-sans font-bold uppercase tracking-wider phone:mt-4 laptop:text-4xl">
          <span class="name-accent">C</span>ontact Me
        </h1>
      </div>
      <div
        class="w-3/4 flex justify-center items-center gap-52 laptop:w-full laptop:gap-8 tablet:gap-4 phone:w-full p-4 phone:flex-col phone:gap-12">
        <div
          class="content-left w-1/3 flex flex-col gap-10 items-start tablet:w-1/2 phone:w-full phone:gap-4 phone:items-center phone:text-center">
          <div class="">
            <h2
              class="text-4xl font-bold text-neutral mb-2 laptop:text-2xl laptoplg:text-2xl">
              I'm currently looking for a <br />
              <span id="role-accent">Junior Developer</span> role 🧑‍💻
            </h2>
            <p
              class="text-neutral-400 text-2xl laptop:text-lg laptoplg:text-lg">
              Check out some of my
              <router-link id="projects-link" class="underline" to="/work"
                >projects</router-link
              >
            </p>
          </div>
          <div>
            <h3
              class="text-3xl font-bold text-neutral laptop:text-xl laptoplg:text-xl">
              Get in touch,<br />and let's have a chat!
            </h3>
            <p
              class="text-neutral-400 text-xl laptop:text-base laptoplg:text-base">
              Even if it's just about OldSchool RuneScape ⚔️
            </p>
          </div>

          <div class="">
            <div class="flex gap-5 items-center justify-center">
              <a
                aria-label="My GitHub profile"
                class="social-icon bg-neutralColour p-2 w-20 text-center laptop:w-16 laptoplg:w-16 tablet:w-14 phone:w-12"
                href="https://github.com/Deehjay"
                target="_blank"
                ><i class="icon devicon-github-original"></i
              ></a>
              <a
                aria-label="My LinkedIn Profile"
                class="social-icon bg-neutralColour p-2 w-20 text-center laptop:w-16 laptoplg:w-16 tablet:w-12"
                href="https://www.linkedin.com/in/daniel-james-6a9928173/"
                target="_blank"
                ><i class="icon devicon-linkedin-plain"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="content-right w-1/4 laptop:w-1/4 tablet:w-1/3 phone:w-full">
          <h4
            class="mb-6 text-3xl font-bold laptop:text-xl laptoplg:text-xl tablet:text-xl">
            Send me a message! 📫
          </h4>
          <form ref="contactForm" action="" class="flex flex-col gap-2">
            <input type="text" ref="name" placeholder="Full name*" />
            <p v-if="formErrors.name" class="error-message">
              Please enter a name
            </p>
            <input type="email" ref="email" placeholder="Email*" />
            <p v-if="formErrors.email" class="error-message">
              Please enter a valid email
            </p>
            <input type="tel" ref="phone" placeholder="Phone" />
            <label for="textarea" id="message-label"
              >Tell me more about it*</label
            >
            <textarea
              type="text"
              rows="7"
              ref="message"
              style="resize: none"
              placeholder="Your message..." />
            <p v-if="formErrors.message" class="error-message">
              Please enter a message
            </p>
            <button
              :disabled="buttonIsDisabled"
              class="self-center submit-button text-white bg-gray-600 p-2 uppercase text-lg drop-shadow-lg rounded"
              type="submit"
              @click="handleSubmit">
              <i v-if="isLoading" class="fa fa-circle-o-notch fa-spin"></i>
              {{ isLoading ? null : "Send" }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.header-fadein {
  opacity: 0;
  animation: fadeIn 0.7s;
  animation-delay: 0.7s;
  animation-fill-mode: forwards;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 20%;
  text-align: center;
  padding: 15px;
  border-radius: 20px;
  animation: fadeInOut 4s linear forwards;
  opacity: 0;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.modal-success {
  background-color: #68cc8c;
}

.modal-failure {
  background-color: rgb(241, 67, 44);
}

.social-icon {
  position: relative;
  z-index: 1;
  font-size: 2rem;
}

.error-message {
  color: rgb(241, 67, 44);
}

.social-icon:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(0);
  transform-origin: bottom center;
  background: #68cc8c;
  z-index: -1;
  transition: transform 0.3s;
}

.social-icon:hover::after {
  transform: scaleY(1);
}

button {
  margin-top: 1em;
  color: white;
  transition: all 0.5s ease;
}

button:hover {
  background-color: #68cc8c;
  color: #333d4d;
}

.icon {
  color: white;
}

.contact-container {
  height: 90vh;
}

.submit-button {
  width: 40%;
}

input,
textarea {
  font-size: 1.2rem;
  padding: 0.6rem;
  border-radius: 5px;
  background-color: #f3ecec;

  color: #333d4d;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 2px solid #377cfb;
}

#message-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0 5px 0;
}

.content-left {
  animation: slideInFromLeft 0.5s;
}

.content-right {
  opacity: 0;
  animation: slideInFromRight 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
}

#projects-link {
  transition: all 0.5s ease;
}

#projects-link:hover {
  color: #333d4d;
}

#role-accent {
  --bg-size: 400%;
  --color-one: #68cc8c;
  --color-two: #377cfb;
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
}

@media (prefers-reduced-motion: no-preference) {
  #role-accent {
    animation: move-bg 8s linear infinite;
  }
  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}

@media only screen and (max-width: 1280px) {
  .contact-container {
    height: 100%;
    max-height: 100%;
  }

  h1 {
    margin-top: 2.4rem;
  }
}

@media only screen and (max-width: 1024px) {
  .submit-button {
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  #message-label {
    font-size: 1rem;
    font-weight: bold;
    margin: 5px 0 5px 0;
  }

  .submit-button {
    width: 60%;
  }
}

@media only screen and (max-width: 480px) {
  .contact-container {
    height: 100%;
    max-height: 100%;
  }

  .social-icon[data-v-337105ab] {
    font-size: 1.2rem;
  }
}
</style>
