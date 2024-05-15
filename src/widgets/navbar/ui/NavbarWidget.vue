<script setup lang="ts">
import { ref } from 'vue'
import UiToolbar from '@/shared/ui-kit/ui/panel/UiToolbar.vue'
import UiButton from '@/shared/ui-kit/ui/button/UiButton.vue'
import UiLink from '@/shared/ui-kit/ui/button/UiLink.vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
])
</script>

<template>
  <ui-toolbar class="ui-navbar">
    <template #start>
      <div class="flex align-items-center gap-2">
        <Menubar class="border-none" :model="items" />
      </div>
    </template>

    <template #end>
      <Avatar v-if="false" class="p-overlay-badge" icon="pi pi-user" shape="circle" size="medium" />
      <ui-link
        label="Увійти"
        to="sign-in"
      />
      <ui-button
        label="Реєстрація"
        to="sign-up"
      />
    </template>
  </ui-toolbar>
</template>

<style scoped>

</style>