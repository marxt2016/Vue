import Vue from 'vue'
import Vuex from 'vuex'
import expenses from './expenses'
import categories from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    expenses,
    categories
  },
  getters: {

  }
})
