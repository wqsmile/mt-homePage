import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = '/api'
axios.interceptors.response.use(res => {
  // console.log(res)
  if (res.status === 200) {
    return res.data.data ? res.data.data : res.data
  }
}, err => {
  if (err.response) {
    console.log('响应时错误')
  } else if (err.request) {
    console.log('请求时错误')
  }
  return Promise.reject(err)
})

axios.interceptors.request.use(req => {
  if (req.url.includes('open.duyiedu.com')) {
    req.params = {
      ...req.params,
      appkey: 'wqsmile_1590679929705'
    }
  }
  return req
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$http = axios
// axios.defaults.baseURL = '/api2'
// Vue.prototype.$http2 = axios
