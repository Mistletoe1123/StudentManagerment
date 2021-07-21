import axios from "axios"

export default axios.create({
    baseURL: '/api',//基础地址
    timeout: 1000 * 8,
    withCredentials: true//携带凭证进行数据交换
})

