<template>
  <div
    class="shop-items w-[75vw] border-black border-[2px] bg-red-900 p-6 flex flex-wrap justify-center gap-6"
    ref="itemsContainer"
  >
    <div
      v-for="item in items"
      :key="item.name"
      :id="`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`"
      class="card w-64 bg-white shadow-xl p-4 rounded-xl hover:shadow-2xl transition-shadow"
    >
      <figure class="w-full h-40 flex justify-center items-center">
        <img :src="item.imageUrl" :alt="item.alt" class="w-auto h-full object-cover rounded-lg" />
      </figure>
      <div class="card-body text-center">
        <h2 class="card-title text-lg font-bold text-gray-800">{{ item.name }}</h2>
        <p class="text-gray-600 text-sm">{{ item.description }}</p>
        <p class="text-lg font-semibold text-green-600 mt-2">${{ item.price }}</p>
        <button
          @click="toCart(item.name.replace(/\s+/g, '-').toLowerCase())"
          class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { items } from './itemlist.js'
const itemsContainer = ref(null)
const cartContainer = ref(null)
const toCart = (card) => {}
</script>

<style scoped></style>
