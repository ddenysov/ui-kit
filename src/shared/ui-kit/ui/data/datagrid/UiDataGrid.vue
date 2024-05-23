<script setup lang="ts">
import { useClient } from '@/shared/ui-kit/composables/client'
import { defineProps, type Ref, ref } from 'vue'
import UiGrid from '@/shared/ui-kit/ui/grid/UiGrid.vue'
import UiCol from '@/shared/ui-kit/ui/grid/UiCol.vue'

const { fetchData } = useClient()

export interface Props {
  name: string,
}

defineProps<Props>()

const loading = ref(false)
const totalRecords = ref(100)
const first = ref(0)
const data: Ref<any> = ref([])

const loadData = async () => {
  loading.value = true
  data.value = await fetchData()
  loading.value = false
}

loadData()
</script>

<template>
  <h1>Data Grid</h1>
  {{ data }}
  <DataView :value="data" paginator :rows="8" :total-records="10000" lazy>
    <template #list="slotProps">
      <ui-grid>
        <ui-col v-for="(item, index) in slotProps.items" :key="index" :col="3">
          <Card class="m-4" style="overflow: hidden">
            <template #header>
              <img class="w-full" alt="user header" src="/images/card-vue.jpg" />
            </template>
            <template #title>Advanced Card</template>
            <template #subtitle>Card subtitle</template>
            <template #content>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque
                quas!
              </p>
            </template>
            <template #footer>
              <div class="flex gap-3 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
              </div>
            </template>
          </Card>
        </ui-col>
      </ui-grid>
    </template>
  </DataView>
</template>

<style scoped>

</style>