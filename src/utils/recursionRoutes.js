//通过后台数据，递归用户路由

function recursionRoutes(allRoutes=[], menuList=[]) {
    let userMenu = [];//匹配好的路由配置

    menuList.forEach(item => {
        allRoutes.forEach(v => {
            if (item.name === v.meta.name) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRoutes(v.children, item.children)
                }
                userMenu.push(v)
            }
        })
    })

    return userMenu
}

export default recursionRoutes;