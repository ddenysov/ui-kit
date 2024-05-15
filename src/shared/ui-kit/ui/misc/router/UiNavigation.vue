<script setup lang="ts">
import { defineProps } from 'vue'
export interface Props {
  to?: string,
}
defineProps<Props>();
</script>

<template>
  <router-link v-if="to" :to="to">
    <slot />
  </router-link>
  <slot v-else />
</template>
