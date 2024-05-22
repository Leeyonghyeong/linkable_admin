<template>
  <main>
    <div>
      <SideCategoryBar class="side-category-bar" />
    </div>
    <RouterView class="content" />
  </main>
</template>

<script lang="ts" setup>
import SideCategoryBar from '@/components/common/SideCategoryBar.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
main {
  display: flex;

  div {
    .side-category-bar {
      position: sticky;
      top: 0;
    }
  }

  .content {
    width: 100%;
  }
}
</style>
