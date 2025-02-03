<template>
  <div
    class="shop-items h-[80vh] w-[75vw] border-black border-[2px] bg-red-900 flex flex-col items-center justify-center text-center"
  >
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String },
})
</script>

<style scoped></style>
