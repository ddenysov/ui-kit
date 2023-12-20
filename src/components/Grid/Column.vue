<script setup lang="ts">
import type {Column} from "@/types";

interface Props {
  sm?: Column,
  md?: Column,
  lg?: Column,
}

const props = withDefaults(defineProps<Props>(), {})

const getColumnSizes = () => {
  const classes = [];
  if (props.sm) {
    classes.push('col-' + props.sm);
  } else {
    classes.push('col');
  }
  if (props.md) {
    classes.push('md:col-' + props.md);
  }
  if (props.lg) {
    classes.push('lg:col-' + props.lg);
  }

  return classes;
};

</script>

<template>
  <div :class="[...getColumnSizes()]">
    <slot />
  </div>
</template>
