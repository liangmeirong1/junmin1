import axios from 'axios'
import qs from 'qs'


//创建axios实例，设置基础url和超时时间
let request = axios.create({
    baseURL:'',
    timeout:5000
})

//请求拦截器
request.interceptors.request.use(
    config=>{
        config.headers.token = localStorage.getItem("token")
        return config
    },
    err=>Promise.reject(err)
)

//响应拦截器
request.interceptors.response.use(
    res=>{
        //主要写业务逻辑
        return res
    },
    err=>Promise.reject(err)
)

//postURL方法
request.postURL = function(url,data,option={}){
    return new Promise(function(resolve,reject){
        request({
            url:url,
            method:"POST",
            data:qs.stringify(data),
            headers:{}
        })
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}

export default request