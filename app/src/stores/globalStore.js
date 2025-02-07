import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    cart: {},
  }),
  actions: {
    increment() {
      this.count++
    },
    addToCart(item) {
      this.cart.push(item)
    },
  },
})
