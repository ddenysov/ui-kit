<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useClass } from '@/composables/style/class'
import type { Responsive } from '../../../types/layout/responsive'

type AlignItems = 'stretch' | 'start' | 'center' | 'baseline' | 'end';
type JustifyContent = 'between' | 'start' | 'center' | 'around' | 'end' | 'evenly';
type Bit = '0' | '1';

export interface Props {
  grow?: Bit | Responsive<Bit>
  shrink?: Bit | Responsive<Bit>
  alignItems?: AlignItems | Responsive<AlignItems>
  justifyContent?: JustifyContent | Responsive<JustifyContent>
}

const props = defineProps<Props>();

const computedClass = computed(() => {
  return [
    useClass<Bit>('flex-grow', props.grow),
    useClass<Bit>('flex-shrink', props.shrink),
    useClass<AlignItems>('align-items', props.alignItems),
    useClass<JustifyContent>('justify-content', props.justifyContent),
  ];
});
</script>

<template>
  <div class="flex" :class="computedClass">
    <slot />
  </div>
</template>
