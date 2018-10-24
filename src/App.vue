<template>
  <div id="app">
    <Title></Title>
    <product-list></product-list>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import Title from '@/components/title'
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
export default {
  name: 'App',
  components: {
    Title, ProductList, ShoppingCart
  }
}
</script>

<style>

</style>
