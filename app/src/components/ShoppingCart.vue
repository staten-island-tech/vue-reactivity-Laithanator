<template>
  <div
    class="card w-64 bg-white shadow-xl p-4 rounded-xl hover:shadow-2xl transition-shadow mt-3vh"
  >
    <figure class="w-full h-40 flex justify-center items-center">
      <img :src="item.imageUrl" :alt="item.alt" class="w-auto h-full object-cover rounded-lg" />
    </figure>
    <div class="card-body text-center">
      <h2 class="card-title text-lg font-bold text-gray-800">{{ item.name }}</h2>
      <p class="text-gray-600 text-sm">{{ item.description }}</p>
      <p class="text-lg font-semibold text-green-600 mt-2">${{ item.price }}</p>
      <p class="text-lg font-semibold text-green-600 mt-2">Quantity: {{ number }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  number: Number,
})
</script>

<style scoped></style>
