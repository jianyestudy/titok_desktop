import axios from 'axios'
import {ElMessage} from 'element-plus'

// 创建 axios 实例
const requests = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
    timeout: 6000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
})

// 错误处理函数
const err = (error) => {
    if (error.response) {
        if (error.response.status !== 200) {
            ElMessage.error('系统错误！')
        }
    }
    return Promise.reject(error)
}

// response interceptor（接收拦截器）
requests.interceptors.response.use((response) => {
    const res = response.data
    if (res.code !== 2000) {
        ElMessage.error(res.msg)
        return Promise.reject('error')
    } else {
        return res
    }
}, err)

export default requests