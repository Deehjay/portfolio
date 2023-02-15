import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import SingleProject from "./components/SingleProject.vue";
import Contact from "./views/Contact.vue";
import { projects } from "./projects.js";

const validProjectNames = [];

for (let i = 0; i < projects.length; i++) {
  validProjectNames.push(projects[i].slug);
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Daniel James - Nottingham, UK",
      component: Home,
    },
    { path: "/about", name: "Daniel James - About", component: About },
    { path: "/work", name: "Daniel James - Work", component: Work },
    {
      path: "/work/:projectName",
      name: "Daniel James - Project",
      component: SingleProject,
      beforeEnter: (to, from, next) => {
        const projectName = to.params.projectName;
        if (validProjectNames.includes(projectName)) {
          next();
        } else {
          next("/");
        }
      },
    },
    { path: "/contact", name: "Daniel James - Contact", component: Contact },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    { path: "/home", redirect: "/" },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

router.beforeEach((to, from, next) => {
  const parts = to.path.split("/");
  const lastPart = parts[parts.length - 1];
  const capitalised = lastPart
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .trim();
  document.title = `Daniel James - ${capitalised || "Nottingham, UK"}`;
  next();
});

createApp(App).use(router).mount("#app");
