<template>
  <main class="game-group-wrap">
    <p class="title">게임 그룹</p>

    <div class="game-group">
      <div class="filter">
        <div class="select-box-wrap">
          <div @click="isShowActive = !isShowActive" class="select-box">
            <p>활성화</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div v-if="isShowActive" class="select-list">
            <p>활성화</p>
            <p>비활성화</p>
          </div>
        </div>
        <button @click="$router.push('/game/group/add')" class="add-group">그룹 생성</button>
      </div>

      <div class="list">
        <!-- TODO: 반야쿠폰 삭제예정 -->
        <div class="th-wrap">
          <p>구분</p>
          <p>그룹명</p>
          <p>생성일</p>
          <p>반야쿠폰 액면가</p>
        </div>
        <div v-for="item in 20" :key="item" @click="$router.push('/game/group/detail')" class="item">
          <p>반야쿠폰</p>
          <p>테스트 테스트 테스트</p>
          <p>2024-00-00</p>
          <p>100,000원</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isShowActive = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.game-group-wrap {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 500;
  }

  .game-group {
    background-color: #fff;
    padding: 30px 24px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 34px;
    border-radius: 8px;

    .filter {
      display: flex;
      gap: 10px;

      button {
        width: 100px;
        height: 38px;
        background-color: $blue_hover;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .list {
      width: 100%;
    }
  }
}
</style>
