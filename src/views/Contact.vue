<script>
import { postContactEmail } from "../api.js";

export default {
  // data() {
  //   return {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   };
  // },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const postOptions = {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
        message: this.$refs.message.value,
      };

      //

      postContactEmail(postOptions)
        .then(() => {
          console.log("Email sent");
        })
        .catch((err) => {
          console.log(err);
        });

      // this.$refs.contactForm.reset();
    },
  },
};
</script>

<template>
  <form ref="contactForm" action="">
    <input type="text" ref="name" />
    <input type="email" ref="email" />
    <input type="text" ref="phone" />
    <input type="text" ref="message" />
    <button @click="handleSubmit">Submit</button>
  </form>
</template>

<style>
button {
  color: black;
}
</style>
