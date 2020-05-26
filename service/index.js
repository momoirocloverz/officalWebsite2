import axios from 'axios'
// import { Message } from 'element-ui'
// import qs from 'qs'
import config from './config'
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV ==="development"){
  config.baseURL = "http://test.api.10000rc.com";
}else if(process.env.NODE_ENV ==="test"){
  config.baseURL="http://test.api.10000rc.com";
}else if(process.env.NODE_ENV ==="production"){
  config.baseURL="http://www.10000rc.com/2.0";
}
const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
