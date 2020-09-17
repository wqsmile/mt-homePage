import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isProvinceSelect: false,
    provinceCode: ''
  },
  mutations: {
    switchChangeArea(state, flag) {
      state.isProvinceSelect = flag
    },
    changeProvinceCode(state, newProvinceCode) {
      state.provinceCode = newProvinceCode
    }
  },
  actions: {
  },
  modules: {
  }
})
