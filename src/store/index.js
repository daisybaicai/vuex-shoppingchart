import Vue from 'vue'
import Vuex from 'vuex'
import carts from './modules/carts'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carts,
    products
  },
  strict: process.env.NODE_ENV !== 'production'
})
