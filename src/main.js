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
      name: "Daniel James // Nottingham, UK",
      component: Home,
    },
    { path: "/about", name: "Daniel James // About", component: About },
    { path: "/work", name: "Daniel James // Work", component: Work },
    {
      path: "/work/:projectName",
      name: "Daniel James // Project",
      component: SingleProject,
    },
    { path: "/contact", name: "Daniel James // Contact", component: Contact },
  ],
});

router.beforeEach((to, from, next) => {
  const parts = to.path.split("/");
  const lastPart = parts[parts.length - 1];
  const capitalised = lastPart
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .trim();
  document.title = `Daniel James // ${capitalised}`;
  next();
});

createApp(App).use(router).mount("#app");
