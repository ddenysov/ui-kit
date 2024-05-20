<script setup lang="ts">

import UiSubmitButton from '@/shared/ui-kit/ui/form/UiSubmitButton.vue'
import UiTextField from '@/shared/ui-kit/ui/form/UiTextField.vue'
import UiFlex from '@/shared/ui-kit/ui/flex/UiFlex.vue'
</script>

<template>
  <ui-flex
    align-items="center"
    justify-content="center"
    full-height
    style="background-color: #ddeeee"
    direction="column"
  >
    <h1>Реєстрація</h1>
    <div style="background-color: #cceeee; width: 500px">
      <ui-flex direction="column">
        <ui-text-field
          form="sign-up"
          label="Електронна пошта"
          name="email"
          :validation="{ required: true, email: true }"
        />

        <ui-text-field
          form="sign-up"
          label="Пароль"
          name="password"
        />

        <ui-text-field
          form="sign-up"
          label="Підтвердити пароль"
          name="password"
        />

        <ui-submit-button
          form="sign-up"
          label="Реєстрація"
          name="submit"
        />
      </ui-flex>
    </div>
  </ui-flex>
</template>

<style scoped>

</style>