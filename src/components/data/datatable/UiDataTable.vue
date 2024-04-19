<script setup lang="ts">
import { defineProps, ref, getCurrentInstance, reactive } from 'vue'

export interface Props {
  name: string,
}

const props = defineProps<Props>();


const instance: any = getCurrentInstance();
const items: Array<any> = [];
instance.slots.default().forEach((component: Object) => {
  console.log(component);
  items.push(component.props);
})

const components = reactive(items);

console.log(components);

const dt = ref()
const loading = ref(false)
const totalRecords = ref(100)
const customers = ref()
const selectedCustomers = ref()
const selectAll = ref(false)
const first = ref(0)

const data = ref([
  {
    id: 1,
    name: 'ololo',
  },
  {
    id: 2,
    name: 'ololo1',
  },
  {
    id: 3,
    name: 'ololo2',
  },
  {
    id: 4,
    name: 'ololo3',
  },
  {
    id: 5,
    name: 'ololo4',
  },
]);

const onPage = (event: any) => {
  console.log(event);
  loadData();
};

const loadData = () => {
  function generateRandomObjects() {
    // Список возможных имен для выбора
    const names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet",
      "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango"];

    const objects = [];

    for (let i = 1; i <= 20; i++) {
      const obj = {
        id: i,
        name: names[Math.floor(Math.random() * names.length)]
      };

      // Добавляем объект в массив
      objects.push(obj);
    }

    // Возвращаем массив объектов
    return objects;
  }
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    data.value = generateRandomObjects();
  }, 500);
}

</script>

<template>
  <DataTable
    :value="data"
    paginator
    lazy
    :rows="10"
    :totalRecords="totalRecords"
    :loading="loading"
    @page="onPage($event)"
    @sort="onPage($event)"
  >
    <Column
      v-for="(component) in components"
      :key="component.name"
      :field="component.name"
      :header="component.label"
      :sortable="true"
    />
  </DataTable>
</template>

<style scoped>

</style>