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
    children: [
      {
        path: "",
        name: "Project",
        component: () => import("./views/Projects/List.vue"),
      },
      {
        path: "new",
        name: "New project",
        component: () => import("./views/Projects/Form.vue"),
      },
      {
        path: ":id",
        name: "Edit project",
        props: true,
        component: () => import("./views/Projects/Form.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
