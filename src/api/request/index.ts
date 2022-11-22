import axios from "axios"
import type {AxiosInstance,AxiosRequestConfig } from "axios"
import {BASE_URL,TIMEOUT} from "@/api/request/config";

class ApiRequest {
  // axios 实例
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 响应拦截
    this.instance.interceptors.response.use((res)=>{
      return res.data
    },error => {
      return error
    })
  }

  // 请求方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get(config: AxiosRequestConfig) {
    return this.request({
      ...config,
      method: "get"
    })
  }

  post(config: AxiosRequestConfig) {
    return this.request({
      ...config,
      method: "post"
    })
  }
}

export default new ApiRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,

})