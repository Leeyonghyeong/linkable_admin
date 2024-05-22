<template>
  <main>
    <VueDatePicker class="date-picker" :enable-time-picker="false" locale="ko" range></VueDatePicker>
  </main>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
</script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  display: flex;
  align-items: center;
  gap: 8px;

  .date-picker {
    width: 250px;
  }
}
</style>
