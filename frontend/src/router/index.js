import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/ListPerson"),
  },
  {
    path: "/student",
    name: "create",
    component: () => import("../view/CreatePerson"),
  },
  {
    path: "/student/:id",
    name: "edit",
    component: () => import("../view/EditPerson"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
