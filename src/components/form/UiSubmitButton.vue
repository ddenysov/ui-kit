<script setup lang="ts">
import { defineProps } from 'vue'
import { useFormStore } from './store/index';
import UiButton from '@/components/button/UiButton.vue'
const store = useFormStore();
import * as yup from 'yup';


export interface Props {
  original?: string,
  name: string,
  label: string,
  form: string,
}

const props = defineProps<Props>();
const emit = defineEmits(['submit'])


const model = defineModel()

const onClick = () => {
  const ruleMethods = {
    required: (validator) => validator.required(),
    email: (validator) => validator.email(),
    // Добавляйте новые правила тут, например:
    min: (validator, value: number) => validator.min(value),
    max: (validator, value: number) => validator.max(value)
  };

  function createYupSchema(schema) {
    let yupSchema = {};
    for (const key in schema) {
      let field = schema[key];
      let validator = yup.string(); // По умолчанию каждое поле string

      // Проходим по ключам правил и применяем соответствующие методы yup
      for (let rule in field) {
        const ruleValue = field[rule];

        console.log('RULE');
        console.log(field);
        console.log(ruleValue);

        if (ruleMethods[rule] && ruleValue !== false) {
          validator = ruleMethods[rule](validator, ruleValue);
        }
      }

      yupSchema[key] = validator;
    }

    return yup.object().shape(yupSchema);
  }

  // Пример использования
  const shm = {
    user: { string: true, required: true },
    email: { string: true, email: true, required: true }
  };

  const yupSchema = createYupSchema(store.validation['sign-in']);
  console.log('SCHEMAAAA');
  console.log(yupSchema);

// trigger validation rule
  yupSchema.validate(store.values['sign-in'], {abortEarly: false})
    .then(valid => console.log(valid))
    .catch(error => console.log(error.inner));



  console.log('ololo');
  console.log(JSON.stringify(store.values['sign-in']));
  store.setLoading('sign-in', true);
  setTimeout(() => {
    console.log('Submitted');
  },2000);

}

</script>

<template>
  <ui-button
    :disabled="store.loading[form]"
    @click="onClick"
    :label="label"
  />
</template>
