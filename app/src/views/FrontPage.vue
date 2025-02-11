<template>
  <div>
    <ShopHeader />
    <div
      class="shop-items w-[75vw] border-black border-[2px] bg-red-900 p-6 flex flex-wrap justify-center gap-6"
      ref="itemsContainer"
    >
      <ShopItems v-for="item in items" :key="item.name" :item="item"
        ><button
          class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
          @click="addToCart(item)"
        >
          Add to Cart
        </button></ShopItems
      >
    </div>
    <div
      class="shop-header fixed right-0 top-0 h-[100vh] w-[25vw] border-black border-[2px] bg-orange-400 flex flex-col items-center text-center"
      ref="cartContainer"
    >
      <h2 class="text-2xl font-bold mt-5 mb-5">Shopping Cart</h2>
      <ShoppingCart v-for="item in cart" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script setup>
import ShopItems from '../components/ShopItems.vue'
import ShopHeader from '../components/ShopHeader.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import { items } from '../components/itemlist.js'
import { ref } from 'vue'
const cart = ref([])
function addToCart(item) {
  cart.value.push(item)
}
</script>

<style scoped></style>
