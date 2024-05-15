<script setup lang="ts">
import Button from 'primevue/button';
import { defineProps } from 'vue'
import UiNavigation from '@/shared/ui-kit/ui/misc/router/UiNavigation.vue'
export interface Props {
  label: string,
  to?: string,
}
defineProps<Props>();
</script>

<template>
  <ui-navigation :to="to">
    <Button
      :label="label"
      link
    />
  </ui-navigation>
</template>

<style scoped>

</style>