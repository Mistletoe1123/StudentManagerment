import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/base.less";
import "./assets/styles/el-reset.less";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qfSubMenu from "qf-sub-menu";

//阿里图标symbel 
let script = document.createElement('script')
script.src = "//at.alicdn.com/t/font_2691924_4wck464l0fy.js"
document.documentElement.appendChild(script)

Vue.use(ElementUI);
Vue.use(qfSubMenu);
Vue.config.productionTip = false;


//用户菜单逻辑放这，防止刷新丢失


//导航守卫
//to目标路径 from原路径 ==>对象
//next 方法,相当于放行，组件才能渲染
//登入next（判断localStorage是否存入token） 未登入跳转登录页
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token') || "";
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    //next()
    //判断用户菜单有没有生成
    if (!store.state.sideMenu.length) {
      store.dispatch('FETCH_MENULIST').then(() => {
        next({ path: to.path })//这里要注意, next里面要传参数即要进入的页面的路由信息，因为next传参数后，当前要进入的路由会被废止，转而进入参数对应的路由，虽然是同一个路由，这么做主要是为了确保addRoutes生效了。
      })
    } else {
      next()
    }
  }
})

/* router.afterEach((to, from, next) => {
  var routerList = to.matched
  store.commit('SET_CRUMBS', routerList)
  //store.commit('permission/SET_CURRENT_MENU', to.name)
}) */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
