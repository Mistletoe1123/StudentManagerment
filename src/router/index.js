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
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../pages/Home"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../pages/Home/Welcome"),
      },
      {
        path: "/my",
        name: "my",
        component: () =>
          import(/* webpackChunkName: "my" */ "../pages/Home/My"),
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
