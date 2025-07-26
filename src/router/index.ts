import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: () => import("./views/Tasks.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("./views/Projects.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
