// 用户 所有的完整路由
//用户路由 除了login和404，需要鉴权

const allRoutes = [
    {
        path: "Welcome",
        name: "Welcome",//和后台数据进行对比
        meta: {
            icon: "iconfont icon-index",
            fullPath: "/Mine",
            name: "管理首页",
        },
        component: () =>
            import(/* webpackChunkName: "Login" */ "../pages/Home/Welcome"),
    },
    {
        path: "Attendence",
        name: "Attendence",
        component: () =>
            import(/* webpackChunkName: "Attendence" */ "../pages/Home/Attendence"),
        meta: {//路由留给我们储存额外路由信息的容器，
            icon: "iconfont icon-kaoqin",
            fullPath: "/Attendence",//后面使用插件
            name: "考勤管理",
        }
    },
    {
        path: "Mine",
        name: "Mine",
        meta: {
            icon: "iconfont icon-xiaoren",
            fullPath: "/Mine",
            name: "我的中心",
        },
        component: () =>
            import(/* webpackChunkName: "Mine" */ "../pages/Home/Mine"),
    },
    {
        path: "Statistics",
        name: "Statistics",
        meta: {
            icon: "iconfont icon-tongji",
            fullPath: "/Statistics",
            name: "数据统计",
        },
        component: () =>
            import(/* webpackChunkName: "Statistics" */ "../pages/Home/Statistics"),
    },
    {
        path: "Users",
        name: "Users",
        meta: {
            icon: "iconfont icon-yonghu",
            fullPath: "/Users",
            name: "用户管理",
        },
        component: () =>
            import(/* webpackChunkName: "Users" */ "../pages/Home/Users"),
    },
    {
        path: "StudentManager",
        name: "StudentManager",
        meta: {
            icon: "iconfont icon-xuesheng2",
            fullPath: "/StudentManager",
            name: "学员管理",
        },
        component: () =>
            import(/* webpackChunkName: "StudentManager" */ "../pages/Home/StudentManager"),
        children: [
            {
                path: "Product",
                name: "Product",
                meta: {
                    icon: "iconfont icon-xiangmu",
                    fullPath: "/StudentManager/StudentProduct",
                    name: "学员项目管理",
                },
               // redirect: "/StudentManager/StudentProduct",
                component: () =>
                    import(/* webpackChunkName: "StudentProduct" */ "../pages/Home/StudentManager/StudengProduct"),
            },
            {
                path: "Profill",
                name: "Profill",
                meta: {
                    icon: "iconfont icon-ziliao",
                    fullPath: "/StudentManager/StudentProfill",
                    name: "学员资料",
                },
                component: () =>
                    import(/* webpackChunkName: "StudentProfill" */ "../pages/Home/StudentManager/StudentProfill"),
            },
            {
                path: "Dormitory",
                name: "Dormitory",
                meta: {
                    icon: "iconfont icon-sushe",
                    fullPath: "/StudentManager/StudentDormitory",
                    name: "学员宿舍",
                },
                component: () =>
                    import(/* webpackChunkName: "StudentDormitory" */ "../pages/Home/StudentManager/StudentDormitory"),
            }
        ]
    }
]

export default allRoutes;
