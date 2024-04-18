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
  loading: {
    [props.form]: false,
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
    <InputText
      v-model="store.values[form][name]"
      :id="name"
      :disabled="store.loading[form]"
      aria-describedby="username-help"
    />
    <small id="username-help">{{ store.errors[form][name] }}</small>
  </ui-flex>

</template>
