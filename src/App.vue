<script setup lang="ts">
import { ref } from 'vue'
import UiToolbar from '@/components/panel/UiToolbar.vue'
import UiFlex from '@/components/layout/UiFlex.vue'
import UiGrid from '@/components/layout/UiGrid.vue'
import UiCol from '@/components/layout/UiCol.vue'
import UiTextField from '@/components/form/UiTextField.vue'
import UiSubmitButton from '@/components/form/UiSubmitButton.vue'
import UiDataTable from '@/components/data/datatable/UiDataTable.vue'
import UiDataTableColumn from '@/components/data/datatable/UiDataTableColumn.vue'
import UiDemo from '@/components/data/datatable/UiDemo.vue'

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

const email = ref('denisov1985@gmail.com')

const onSubmit = (values) => {
  console.log('SUBMIT')
  console.log(values)
};
const onError = (values) => {
  console.log('ERROR')
  console.log(values)
};
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
    >1
    </ui-flex>
    <ui-flex grow="0" class="align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      1
    </ui-flex>
    <ui-flex grow="0" class="align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      1
    </ui-flex>
  </ui-flex>

  <ui-grid>
    <ui-col :col="1" class="bg-primary font-bold  px-5 py-3 border-round">1</ui-col>
    <ui-col class="bg-primary font-bold  px-5 py-3 border-round">1</ui-col>
    <ui-col class="bg-primary font-bold  px-5 py-3 border-round">1</ui-col>
    <ui-col class="bg-primary font-bold  px-5 py-3 border-round">1</ui-col>
    <ui-col class="bg-primary font-bold  px-5 py-3 border-round">1</ui-col>
  </ui-grid>

  <ui-grid>
    <ui-col :col="4">
      <ui-text-field
        form="sign-up"
        label="Email"
        original=""
        name="email"
        :validation="{ required: true, email: true }"
      />

      <ui-text-field
        form="sign-in"
        label="Email"
        original=""
        name="email"
        :validation="{ required: true, email: true }"
      />

      <ui-text-field
        form="sign-in"
        label="User"
        original=""
        name="user"
        :validation="{ required: true, min: 10 }"
      />

      <ui-submit-button
        form="sign-in"
        name="submit"
        label="Submit"
        @submit="onSubmit"
        @error="onError"
      />
    </ui-col>
  </ui-grid>

  <ui-data-table name="products">
    <ui-data-table-column name="id" label="Code">
      <template #body="slotProps">
        OLOLO123123
      </template>
    </ui-data-table-column>
    <ui-data-table-column name="name" label="Name" />
  </ui-data-table>
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
