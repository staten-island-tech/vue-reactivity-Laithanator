<template>
  <div>
    <ShopHeader />
    <div
      class="shop-items w-[75vw] border-black border-[2px] bg-red-900 p-6 flex flex-wrap justify-center gap-6"
      ref="itemsContainer"
    >
      <ShopItems v-for="item in items" :key="item.name" />
    </div>
    <ShoppingCart />
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import ShopItems from '../components/ShopItems.vue'
import ShopHeader from '../components/ShopHeader.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import { items } from '../components/itemlist.js'

const globalStore = useGlobalStore()
</script>

<style scoped></style>
