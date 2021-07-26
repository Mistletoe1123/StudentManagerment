import axios from "axios";
import router from "../router";
import el from 'element-ui';

let http = axios.create({
    baseURL: '/api',//基础地址
    timeout: 1000 * 8,
    withCredentials: true//携带凭证进行数据交换
})

//请求拦截器 拦截所有请求 给每个请求添加请求头
http.interceptors.request.use(config => {
    //config就是拦截的每一个请求
    //console.log(config); 验证码被拦截
    let token = localStorage.getItem('token')

    let pathList = ['/users/login', '/users/getCaptcha']//不加请求头清单
    let result = pathList.includes(config.url)
    //console.log(result);
    if (!result) {
        config.headers.authorization = token//不加 登录后没有authorization 显示校验失败
    }
    return config
})

//token校验失败原因
//失效 过期 跳转登入页
//错误 消磁 跳转登入页
http.interceptors.response.use(config => {
    //console.log(el);
    if (config.data.code === '1004' || config.data.code === '10022') {
        router.push('/login')
        localStorage.removeItem('token')
        el.Message.error('登录信息过期！')
    }
    return config
})

export default http;

