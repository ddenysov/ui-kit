<script setup lang="ts">
import { ref } from "vue";
import UiToolbar from '@/components/panel/UiToolbar.vue'
import UiFlex from '@/components/layout/UiFlex.vue'

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
]);
</script>

<template>
  <ui-toolbar>
    <template #start>
      <div class="flex align-items-center gap-2">
        <Menubar class="border-none" :model="items" />
      </div>
    </template>

    <template #center>
      ololo
    </template>

    <template #end>
      <Avatar class="p-overlay-badge" icon="pi pi-user" shape="circle" size="medium" />
    </template>
  </ui-toolbar>

  <ui-flex>
    <ui-flex
      :grow="{ sm: '1', md: '0' }"
      align-items="center"
      justify-content="center"
      class="bg-primary font-bold m-2 px-5 py-3 border-round"
    >1</ui-flex>
    <ui-flex grow="0" class="align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">1</ui-flex>
    <ui-flex grow="0" class="align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">1</ui-flex>
  </ui-flex>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
