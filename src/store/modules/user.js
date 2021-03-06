export default {
  namespaced: true,
  state: () => ({
    //   token: '',
    //   userType: 'user',
    //   phone: '',
    //   email: '',
    //   user: {},
  }),
  mutations: {
    //   userType(state, userType) {
    //     state.userType = userType;
    //   },
    //   phone(state, phone) {
    //     state.phone = phone;
    //   },
    //   email(state, email) {
    //     state.email = email;
    //   },
    //   token(state, token) {
    //     state.token = token;
    //   },
  },
  getters: {
    //   isAuth: (state) => !!state.token,
    //   authUserType: (state) => state.userType,
  },
  actions: {
    // login ({ dispatch }, params) {
    //   return dispatch('post', { method: 'user/login', params }, { root: true }).catch((errors) => {
    //     // Объдиняем массив ошибок
    //     throw Object.values(errors).reduce((result, current) => `${result} ${current}`)
    //   })
    // },
    //   // Специфика проекта - login и register один метод
    registerUser ({ dispatch }, params) {
      return dispatch('postRequest', { method: 'auth/login', params }, { root: true })
        .then(response => {
          console.log(response)
        })
        .catch((errors) => {
          throw Object.values(errors).reduce((result, current) => `${result} ${current}`)
        })
    }
    //   logout({ commit }) {
    //     return new Promise((resolve) => {
    //       commit('token', '');
    //       resolve(true);
    //     });
    //   },
    //   // Авторизация постовщика
    //   supplier_login({ dispatch }, params) {
    //     return dispatch('post', { method: 'supplier/login', params }, { root: true });
    //   },
    //   supplier_register({ dispatch }, params) {
    //     return dispatch('post', { method: 'supplier/register', params }, { root: true });
    //   },
    //   supplier_restore_password({ dispatch }, email) {
    //     return dispatch('post', { method: 'supplier/reset_password/send_mail', params: { email } }, { root: true });
    //   },
    //   supplier_restore_check({ dispatch }, params) {
    //     return dispatch('post', { method: 'supplier/reset_password/check_token', params }, { root: true });
    //   },
    //   supplier_set_password({ dispatch }, params) {
    //     return dispatch('post', { method: 'supplier/reset_password/set_new', params }, { root: true });
    //   },
  }
}
