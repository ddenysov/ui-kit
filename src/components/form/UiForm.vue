<script setup lang="ts">
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import { defineProps } from 'vue'
import { useFormStore } from './store/index';

const form = useFormStore();

form.$patch({
  forms: {
    ololo: 'trololop',
  }
});

form.$patch({
  forms: {
    alala: 'lalal',
  }
})

export interface Props {
  name: string,
}

const model = defineModel()

const props = defineProps<Props>();

const { meta, defineField, handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    name: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});
const [name, nameAttrs] = defineField('name');

const onSubmit = handleSubmit(values => {
  console.log(JSON.stringify(values, null, 2));
});

</script>

<template>
  <div class="ui-form">
    store
    {{ form.name }}
    <slot />
  </div>
</template>

<style scoped>

</style>