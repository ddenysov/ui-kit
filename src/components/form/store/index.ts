// stores/counter.js
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      values: {},
      validation: {},
      errors: {},
      loading: {},
    }
  },
  actions:  {
    setLoading(form: string, value: boolean) {
      this.$patch({
        loading: {
          [form]: value,
        }
      })
    },

    setErrors(form: string, value: any) {
      this.$patch({
        errors: {
          [form]: value,
        }
      })
    }
  }
})