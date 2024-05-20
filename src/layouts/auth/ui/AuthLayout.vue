<script setup lang="ts">

import UiFlex from '@/shared/ui-kit/ui/flex/UiFlex.vue'
import UiTextField from '@/shared/ui-kit/ui/form/UiTextField.vue'
import UiSubmitButton from '@/shared/ui-kit/ui/form/UiSubmitButton.vue'
</script>

<template>
  <ui-flex
    align-items="center"
    justify-content="center"
    full-height
    style="background-color: #ddeeee"
  >
    <div style="background-color: #cceeee; width: 500px">
      <ui-flex direction="column">
        <ui-text-field
          form="sign-up"
          label="Email"
          name="email"
          :validation="{ required: true, email: true }"
        />

        <ui-text-field
          form="sign-up"
          label="Password"
          name="password"
        />

        <ui-submit-button
          form="sign-up"
          label="Submit"
          name="submit"
        />
      </ui-flex>
    </div>
  </ui-flex>
</template>

<style scoped>

</style>