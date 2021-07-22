import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/base.less";
import "./assets/styles/el-reset.less";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//阿里图标symbel 
let script = document.createElement('script')
script.src = "//at.alicdn.com/t/font_2691924_4wck464l0fy.js"
document.documentElement.appendChild(script)

Vue.use(ElementUI);
Vue.config.productionTip = false;

//导航守卫
//to目标路径 from原路径 ==>对象
//next 方法,相当于放行，组件才能渲染
//登入next（判断localStorage是否存入token） 未登入跳转登录页
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token') || "";
  if (!token) {
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
