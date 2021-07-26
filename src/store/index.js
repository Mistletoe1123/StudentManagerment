import Vue from "vue";
import Vuex from "vuex";
import dynamicRoutes from "../router/dynamicRoutes"
import allRoutes from "../router/allRoutes"
import recursionRoutes from "../utils/recursionRoutes"
import * as api from "@/api"
import router from "../router"

Vue.use(Vuex);

let userInfo = localStorage.getItem('userInfo') || "{}"
export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(userInfo),
    sideMenu: [],//侧边栏菜单
    menuShouqi: false,
    //crubms: []
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    SET_SIDEMENU(state, payload) {
      state.sideMenu = [...payload]
      //allRoutes->dynamicRoutes的path='/'的children，dynamicRoutes->routes
      let target = dynamicRoutes.find(item => item.path === '/')
      target.children = [...payload]
      router.addRoutes(dynamicRoutes)
    },
    SET_MENUSHOUQI(state) {
      state.menuShouqi = !state.menuShouqi
    },
  /*   SET_CRUMBS(state, payload) {
      state.crubms = payload
    } */
  },
  actions: {
    //发起 异步 请求，获取用户菜单,异步会先执行里面的逻辑
    FETCH_MENULIST({ commit }) {
      return api.getMenuListApi().then(res => {
        console.log(res);
        let menuList = res.data.menuList
        console.log(menuList);
        let userMenu = recursionRoutes(allRoutes, menuList)//递归匹配用户路由
        commit('SET_SIDEMENU', userMenu)
      })
    }
  },
  modules: {},
});

//脚本语法 刷新之后vuex会丢失：刷新之后重新执行vuex逻辑，vuex重新被初始化了，用户信息是在登入时候才存到vuex中，我们需要将用户信息保存到localStorage
//localStorage.setItem('userInfo',JSON.stringify(res.data.userInfo)) 
