<template>
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String },
})
</script>

<style scoped></style>
