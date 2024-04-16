<script setup lang="ts">
import { defineProps } from 'vue'
import { useFormStore } from './store/index';
import { useValidationAdapter } from '@/components/form/validation/adapter/yup'
const store = useFormStore();

const { parseRules } = useValidationAdapter();

export interface Props {
  original?: string,
  name: string,
  label: string,
  form: string,
  validation?: {},
}

const props = defineProps<Props>();

store.$patch({
  values: {
    [props.form]: {
      [props.name]: props.original,
    },
  },
  validation: {
    [props.form]: {
      [props.name]: props.validation,
    },
  },
  errors: {
    [props.form]: {
      [props.name]: '',
    },
  },
});


const model = defineModel()

</script>

<template>
  <ui-flex
    direction="column"
    :gap="2"
  >
    <label :for="name">{{ label }}</label>
    <InputText v-model="store.values[form][name]" :id="name" aria-describedby="username-help" />
    <small id="username-help">Enter your username to reset your password. {{ store.values[form][name] }}</small>
  </ui-flex>

</template>
