import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import SingleProject from "./components/SingleProject.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    { path: "/about", name: "About", component: About },
    { path: "/work", name: "Work", component: Work },

    { path: "/work/:projectName", name: "Project", component: SingleProject },
    { path: "/contact", name: "Contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
