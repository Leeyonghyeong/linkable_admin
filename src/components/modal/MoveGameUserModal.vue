<template>
  <main>
    <div class="modal-overlay">
      <div class="modal">
        <div class="title-button">
          <p class="title">참가자 이동</p>
          <svg
            @click="$emit('isShowModal')"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div class="select-box-wrap">
          <div @click="isShowGameList = !isShowGameList" class="select-box">
            <p>게임 선택</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div v-if="isShowGameList" class="select-list">
            <p v-for="item in 10" :key="item">test</p>
          </div>
        </div>

        <button>참가자 이동</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isShowGameList = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  .modal-overlay {
    height: 100%;
    padding: 86px 290px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .modal {
      width: 450px;
      height: 240px;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      border-radius: 8px;

      .title-button {
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 18px;
          font-weight: 500;
        }

        svg {
          width: 24px;
          cursor: pointer;
        }
      }

      .select-box-wrap {
        .select-box {
          width: 100%;
          height: 50px;
        }

        .select-list {
          top: 52px;
          height: 200px;
        }
      }

      button {
        background-color: $blue_hover;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
}
</style>
