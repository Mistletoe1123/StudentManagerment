import Vue from "vue";
import VueRouter from "vue-router";
import Homee from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/homee",
    name: "Homee",
    component: Homee
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../pages/login"),
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../pages/Home"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
