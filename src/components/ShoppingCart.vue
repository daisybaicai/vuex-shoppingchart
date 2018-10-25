<template>
  <div class="ShoppingList">
    <h2 class="title">shoppingcheck</h2>
    <div class="Shop">
      <ul>
        <li v-for="(product,index) in productss" :key="index">
          <span>{{product.title}}</span>
          <span>- ${{ product.price }}</span>
          <span>x {{ product.num }}</span>
        </li>
      </ul>
      <p>Total ${{totalprice}}</p>
      <br>
      <p>checkout <button @click="checkoutall">checkout</button></p>
    </div>
  </div>
</template>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .ShoppingList
    text-align: center
    .title
      text-align: center
    .Shop
      width: 500px
      height: 400px
      margin-left: 10%
      margin-right: 10%
</style>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      productss: 'cartProducts',
      totalprice: 'totalPrice'
    })
  },
  methods: {
    ...mapActions({
      checkoutall: 'checkoutall'
    })
  }
}
</script>
