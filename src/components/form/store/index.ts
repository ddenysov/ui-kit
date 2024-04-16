// stores/counter.js
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      values: {},
      validation: {},
      errors: {},
    }
  },
})