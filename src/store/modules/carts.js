const state = {
  items: [],
  checkout: null
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, num }) => {
      const product = rootState.products.products.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        num
      }
    })
  }
}

const mutations = {
  addproducttobag (state, { id }) {
    state.items.push({
      id,
      num: 1
    })
  },
  increaseitem (state, { id }) {
    const carItem = state.items.find(item => item.id === id)
    carItem.num++
  }
}

const actions = {
  addtobag ({ commit, state }, product) {
    if (product.inventory > 0) { // 库存不为空
      const carItem = state.items.find(item => item.id === product.id)
      if (!carItem) {
        commit('addproducttobag', {id: product.id})
      } else {
        commit('increaseitem', carItem)
      }
    }
    commit('decreaseproductnum', {id: product.id})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
