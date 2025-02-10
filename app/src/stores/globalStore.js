import { items } from '@/components/itemlist'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    cart: {},
    actions: {
      addToCart(item) {
        this.cart.push(item)
        this.removeFromArray(itemShop)
      },
      addToShop(item) {
        this.itemShop.push(item)
        this.removeFromArray(cart)
      },
      removeFromArray(array) {
        array.splice(array.indexOf(item), 1)
      },
    },
  }),
})
