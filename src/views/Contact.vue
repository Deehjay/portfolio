<script>
import { postContactEmail } from "../api.js";
import { emailRegex } from "../regex.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      postOptions: {},
      formErrors: {},
      isLoading: false,
      showModal: false,
      modalMessage: "Message sent successfully!",
      buttonIsDisabled: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.postOptions = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        message: this.$refs.message.value,
      };

      this.formErrors = {
        name: this.postOptions.name ? false : true,
        email: emailRegex.test(this.postOptions.email) ? false : true,
        message: this.postOptions.message ? false : true,
      };

      if (Object.values(this.formErrors).every((err) => err === false)) {
        this.isLoading = true;
        this.buttonIsDisabled = true;

        postContactEmail(this.postOptions)
          .then(() => {
            this.buttonIsDisabled = false;
            this.isLoading = false;
            this.showModal = true;
            setTimeout(() => {
              this.showModal = false;
            }, 4000);
            this.$refs.contactForm.reset();
          })
          .catch((err) => {
            console.log(err);
            this.buttonIsDisabled = false;
            this.isLoading = false;
            this.modalMessage = "Something went wrong!";
            this.showModal = true;
            setTimeout(() => {
              this.showModal = false;
            }, 4000);
          });
      }

      //
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

    <div class="contact-container flex justify-center items-center">
      <div class="w-3/4 flex justify-center items-center gap-52">
        <div class="content-left w-1/3 flex flex-col gap-10 items-start">
          <div class="">
            <h2 class="text-4xl font-bold text-neutral">
              I'm currently looking for a <br />
              <span id="role-accent">Junior Developer</span> role 🧑‍💻
            </h2>
            <p class="text-neutral-400 text-xl">
              Check out some of my
              <router-link class="underline" to="/work">projects</router-link>
            </p>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-neutral">
              Get in touch,<br />and let's have a chat!
            </h2>
            <p class="text-neutral-400 text-xl">
              Even if it's just about OldSchool RuneScape ⚔️
            </p>
          </div>

          <div class="">
            <div class="flex gap-5 items-center justify-center">
              <a
                class="social-icon bg-neutralColour p-2 w-20 text-center"
                href="https://github.com/Deehjay"
                target="_blank"
                ><i class="icon devicon-github-original"></i
              ></a>
              <a
                class="social-icon bg-neutralColour p-2 w-20 text-center"
                href="https://www.linkedin.com/in/daniel-james-6a9928173/"
                target="_blank"
                ><i class="icon devicon-linkedin-plain"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="content-right w-1/4">
          <h1 class="mb-6 text-3xl font-bold">Send me a message! 📫</h1>
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
              class="self-center submit-button text-white bg-gray-600 p-2 uppercase text-lg drop-shadow-lg"
              type="submit"
              @click="handleSubmit">
              <i v-if="isLoading" class="fa fa-circle-o-notch fa-spin"></i>
              {{ isLoading ? null : "Send message" }}
              <!-- <i
                :class="isLoading ? 'fa fa-circle-o-notch fa-spin' : 'regular'"
                >{{ isLoading ? null : "Submit" }}</i
              > -->
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
  color: #333d4d;
}

.icon {
  color: white;
}

.contact-container {
  height: 91vh;
  max-height: 91vh;
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
  animation: slideInFromLeft 0.8s;
}

.content-right {
  opacity: 0;
  animation: slideInFromRight 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
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
</style>
