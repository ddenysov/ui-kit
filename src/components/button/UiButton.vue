<script setup lang="ts">
import Button from 'primevue/button';
import { defineProps } from 'vue'
export interface Props {
  label: string,
}
defineProps<Props>();
</script>

<template>
  <Button
    :label="label"
  />
</template>

<style scoped>

</style>