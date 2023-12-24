<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import InputText from 'primevue/inputtext';

interface MenuItem {
  label: string,
  icon: string,
  items: Array<MenuItem>,
}

interface Props {
  items: Array<MenuItem>,
}

defineProps<Props>();
</script>

<template>
  <div style="height: 200px">
    <Menubar
      :model="items"
      :pt="{
        root: ({ props, state, context }) => ({
            class:'bg-white border-0'
        }),
        menuitem: ({ props, state, context }) => ({
            class:'bg-white border-0'
        }),
    }"
    >
      <template #start>
        <img width="60" height="60" src="/images/logo2.png">
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          <Avatar image="/images/avatar.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </div>
</template>
