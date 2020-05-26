import http from 'http'

export default {
  // 自定义的请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  // 超时设置
  timeout: 10000,
  // 跨域是否带Token
  withCredentials: false,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // XSRF 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
}
