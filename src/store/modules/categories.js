export default {
  namespaced: true,
  state: () => ({
    isLoadingCategories: false,
    categories: []
  }),
  mutations: {
    setLoading (state, { loaderKey, loadingBool }) {
      state[loaderKey] = loadingBool
    },
    setCategories (state, payload) {
      state.categories = payload || []
    }
  },
  getters: {
    isLoadingCategories: state => state.isLoadingCategories,
    categories: state => state.categories
  },
  actions: {
    getCategories ({ dispatch, commit }) {
      commit('setLoading', { loaderKey: 'isLoadingCategories', loadingBool: true })

      return dispatch('getRequest', 'products/getCategories', { root: true })
        .then((response) => {
          if (response?.status === 'success') {
            console.log(response?.categories)
            commit('setCategories', response?.categories)
          }
        })
        .finally(() => {
          commit('setLoading', { loaderKey: 'isLoadingCategories', loadingBool: true })
        })
    }
  }
}
