<script lang="ts">
import { ref, h } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
  props: {
    /* ... */
  },
  setup(props, { slots }) {
    const count = ref(1)

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

    console.log('slots');
    console.log(slots.default());

    const childernSlots = slots.default();

    console.log(childernSlots[0].children);

    // return the render function
    return () => h(
      DataTable,
      {
        value: data.value,
      },
      [
        h(Column, {
          field: 'id',
          header: 'ololo'
        }, {
          body: () => h(childernSlots[0].children.body)
        }),
        h(Column, {
          field: 'name',
          header: 'trololo'
        }),
      ]
    )
  }
}
</script>