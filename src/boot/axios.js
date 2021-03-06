import Vue from 'vue'
import axios from 'axios'
import { APP_BASE_URL } from '@configs'

const instance = axios.create({
  baseURL: APP_BASE_URL
})
instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common.Accept = 'application/json'
Vue.prototype.$axios = instance

export default instance

// Vue.prototype.$axios = axios
