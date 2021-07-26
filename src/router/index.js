import Vue from "vue";
import VueRouter from "vue-router";
import Homee from "../views/Home.vue";

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
      import(/* webpackChunkName: "Login" */ "../pages/Login"),
  },
  //...dynamicRoutes//不加...是[],加了是{}
];

const router = new VueRouter({
  routes,
});


//导航到同一路径报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
return originalPush.call(this, location).catch(err => err)
}

export default router;
