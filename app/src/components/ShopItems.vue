<template>
  <div class="card w-64 bg-white shadow-xl p-4 rounded-xl hover:shadow-2xl transition-shadow">
    <figure class="w-full h-40 flex justify-center items-center">
      <img :src="item.imageUrl" :alt="item.alt" class="w-auto h-full object-cover rounded-lg" />
    </figure>
    <div class="card-body text-center">
      <h2 class="card-title text-lg font-bold text-gray-800">{{ item.name }}</h2>
      <p class="text-gray-600 text-sm">{{ item.description }}</p>
      <p class="text-lg font-semibold text-green-600 mt-2">${{ item.price }}</p>
      <button
        @click="globalStore.addToCart(item)"
        class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/globalStore.js'
import { ref } from 'vue'
import { items } from './itemlist.js'
defineProps({
  item: Object,
})
const globalStore = useGlobalStore()
</script>

<style scoped></style>
