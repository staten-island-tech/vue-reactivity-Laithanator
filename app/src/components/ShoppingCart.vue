<template>
  <div
    class="shop-header fixed right-0 top-0 h-[100vh] w-[25vw] border-black border-[2px] bg-orange-400 flex flex-col items-center text-center"
    ref="cartContainer"
  >
    <h2 class="text-2xl font-bold mt-5 mb-5">Shopping Cart</h2>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { ref, computed } from 'vue'

const globalStore = useGlobalStore()

const cartContainer = computed(() => globalStore.cart)
</script>

<style scoped></style>
