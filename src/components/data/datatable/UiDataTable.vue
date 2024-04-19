<script setup lang="ts">
import { defineProps, ref, getCurrentInstance, reactive, h } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'

export interface Props {
  name: string,
}

const props = defineProps<Props>();


const instance: any = getCurrentInstance();
const items: Array<any> = [];
instance.slots.default().forEach((component: Object) => {
  console.log(component);
  items.push({
    props: component.props,
    children: component.children.body,
  });
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

const render = () => {
  const childrenSlots = instance.slots.default();
  const children = childrenSlots.map((slot: any) => h(Column, {
    field: slot.props.name,
    header: slot.props.label
  }, {
    body: () => h(slot.children.body)
  }))

  return h(
    DataTable,
    {
      value: data.value,
    },
    () => children,
  )
};

</script>

<template>
  <div>
    <render />
  </div>
</template>
