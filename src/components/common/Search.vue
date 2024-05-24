<template>
  <main>
    <div>
      <input type="text" :placeholder="title" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </main>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  div {
    width: 250px;
    height: 38px;
    padding: 0 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid $grey_2;
    border-radius: 4px;

    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      font-size: 15px;
    }

    svg {
      width: 18px;
      color: $grey_4;
    }
  }
}
</style>
