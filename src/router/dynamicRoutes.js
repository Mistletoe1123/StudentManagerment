//动态路由配置
//用户未登录 只访问login
//用户登录 根据后台返回当前用户菜单信息，对比计算用户的路由配置，通过addroutes动态添加
import allRoutes from "./allRoutes"
console.log(allRoutes);
const dynamicRoutes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "Home" */ "../pages/Home"),
       /*  children: [
          ...allRoutes
        ] */
    },
    {
        path: "*",
        component: () => import(/* webpackChunkName: "Page404" */"./../pages/Page404")
    }

]

export default dynamicRoutes