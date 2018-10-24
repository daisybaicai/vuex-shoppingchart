<template>
  <div class="ProductList">
    <h2 class="title">Product</h2>
    <div class="Products">
      <ul>
        <li v-for="(product,index) in products" :key="index">
          <span>{{product.title}}</span>
          <span>- ${{ product.price }}</span>
          <button
            :disabled="!product.inventory"
            @click="addtobag(product)">
          add to cart
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ProductList
    text-align: center
    .title
      text-align: center
    .Products
      width: 500px
      height: 100px
      margin-left: 10%
      margin-right: 10%
</style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.products
    })
  },
  methods: {
    ...mapActions({
      addtobag: 'addtobag'
    })
  }
}
</script>
