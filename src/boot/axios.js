import Vue from 'vue'
import axios from 'axios'
import { APP_BASE_URL, APP_API_PREFIX } from '@configs'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: `${APP_BASE_URL}${APP_API_PREFIX}` })
Vue.prototype.$api = api

export { axios, api }
