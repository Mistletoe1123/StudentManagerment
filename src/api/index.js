import axios from "./config"

//定义很多请求的接口

//登入
export const loginApi = (username, password) => axios.post("/users/login",
    {
        username, password//post参数 直接传 get用params或者拼接
    }
)

//获取验证码
export const getCaptchaApi = () => axios.get("/users/getCaptcha")

//刷新验证码
export const refreshCaptchaApi = () => axios.get("/users/refreshCaptcha")

//校验验证码
export const verifyCaptchaApi = (captcha) => axios.get("/users/verifyCaptcha", {
    params: {
        captcha
    }
})

//生成二维码
export const getScancodeApi = () => axios.get("/users/getScancode")

//微信登录
export const wechatLoginApi = (wechatCode) => axios.get("/users/wechatLogin", {
    params: {
        wechatCode
    }
})

//getloginlog
//登入日志
export const getloginlogApi = (page = 1, count = 10) => axios.get("/getloginlog", {
    params: {
        page, count
    }
})