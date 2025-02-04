<template>
  <div>
    <template>
      <h1 class="bg-red-500">Hello world!</h1>
    </template>
    <ShopHeader />
    <ShopItems />
    <ShoppingCart />
  </div>
</template>

<script setup>
import ShopItems from '../components/ShopItems.vue'
import ShopHeader from '../components/ShopHeader.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
</script>

<style scoped></style>
