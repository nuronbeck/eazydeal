import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import { api } from '@boot/axios'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: () => ({
      token: ''
    }),
    mutations: {},
    getters: {},
    actions: {
      // Universal methods
      getRequest ({ state }, method) {
        const { token } = state
        const headers = { Authorization: `Bearer ${token}` }
        return api.get(`/${method}`, { headers }).then((response) => response.data)
      }
      // postRequest ({ state }, { method, params }) {
      //   return axios.post(`${method}`, params).then((response) => response.data).catch((error) => {
      //     if (error.response?.data?.errors) {
      //       // Объединяем ошибки массивов в строки (Laravel возвращает error:[message]
      //       const oErrors = error.response.data.errors
      //       const errors = {}
      //       Object.keys(oErrors).forEach((oKey) => {
      //         // Laravel может вернуть ключ ошибки как contact.phone
      //         // преобразуем для удобства использования
      //         const key = oKey.replace(/\./g, '_')
      //         errors[key] = Array.isArray(oErrors[oKey]) ? oErrors[oKey].join(', ') : oErrors[oKey]
      //       })
      //       throw errors
      //     } else if (error.response?.data?.error) {
      //       error = { error: error.response.data.error }
      //       throw error
      //     } else {
      //       error = { error: 'Ошибка сети' }
      //       throw error
      //     }
      //   })
      // }
    },

    modules,

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: true // process.env.DEBUGGING
  })

  return Store
}
