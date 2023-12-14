<script setup lang="ts">
import Button from "primevue/button";
import styles from './UiButton.module.css';
console.log(styles);
defineProps<{
  size?: string
}>()
</script>

<template>
  <span class="p-buttonset">
    <Button :class="styles.xs" label="Save" icon="pi pi-check" />
    <Button  :class="styles.xs"  label="Delete" icon="pi pi-trash" />
    <Button  :class="styles.xs"  label="Cancel" icon="pi pi-times" />
</span>
</template>

<style scoped>

</style>