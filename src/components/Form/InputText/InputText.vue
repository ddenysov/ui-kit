<script setup lang="ts">
import Button from "primevue/button";
import type {Color, Size, Tint} from '@/types/ui';
import useColor from "@/composable/useColor";

const { backgroundColorStyle } = useColor();

interface Props {
  size?: Size,
  color?: Color,
  tint?: Tint,
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'primary',
})

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <Button
    :class="['p-button-' + size]"
    :style="{
      backgroundColor: backgroundColorStyle(color, tint),
      borderColor: backgroundColorStyle(color, tint),
    }"
    @click="$emit('click')"
  >
    <slot/>
  </Button>
</template>
