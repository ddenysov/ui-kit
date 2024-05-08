<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useFormStore } from './store/index';
import UiButton from '@/components/button/UiButton.vue'
const store = useFormStore();

export interface Props {
  label: string,
  form: string,
}

const props = defineProps<Props>();
const emit = defineEmits(['error', 'submit'])

const onClick = async () => {
  try {
    await store.submit(props.form);
    emit('submit', store.getValues(props.form));
  } catch (e) {
    emit('error', e);
  }
}
</script>

<template>
  <ui-button
    :disabled="store.isLoading(props.form)"
    @click="onClick"
    :label="label"
  />
</template>
