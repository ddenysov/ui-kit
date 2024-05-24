<script setup lang="ts">

import UiSubmitButton from '@/shared/ui-kit/ui/form/UiSubmitButton.vue'
import UiTextField from '@/shared/ui-kit/ui/form/UiTextField.vue'
import UiFlex from '@/shared/ui-kit/ui/flex/UiFlex.vue'
</script>

<template>
  <ui-flex
    align-items="center"
    full-height
    direction="column"
  >
    <h1>Створити покатушку</h1>
    <div style="width: 500px">
      <ui-flex direction="column">
        <ui-text-field
          form="create-event"
          label="Назва"
          name="name"
          :validation="{ required: true }"
        />

        <ui-text-field
          form="create-event"
          label="Опис"
          name="description"
        />

        <ui-submit-button
          form="create-event"
          label="Створити"
          name="submit"
        />
      </ui-flex>
    </div>
  </ui-flex>
</template>

<style scoped>

</style>