<template>
  <main class="game-list-wrap">
    <p class="title">게임 목록</p>

    <div class="game-list">
      <div class="filter">
        <div class="select-box-wrap">
          <div @click="isShowStatus = !isShowStatus" class="select-box">
            <p>전체</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div v-if="isShowStatus" class="select-list">
            <p>모집중</p>
            <p>게임중</p>
            <p>종료</p>
            <p>취소</p>
          </div>
        </div>
        <Period />
        <Search :title="'지점명/게임명'" />
        <button @click="$router.push('/game/add')" class="add-game-button">게임 생성</button>
      </div>

      <div class="list">
        <div class="th-wrap">
          <p>상태</p>
          <p>지점명</p>
          <p>게임명</p>
          <p>구분</p>
          <p>결제수단</p>
          <p>참가비</p>
          <p>참가자 수</p>
          <p>총 참가비</p>
          <p>총 시상금</p>
          <p>등록일시</p>
        </div>
        <div v-for="item in 20" :key="item" @click="$router.push('/game/list/detail')" class="item">
          <p>
            <span>모집중</span>
          </p>
          <p>테스트점 테스트점</p>
          <p>테스트 테스트 테스트</p>
          <p>일반</p>
          <p>포인트</p>
          <p>100,000,000원</p>
          <p>100,000,000명</p>
          <p>100,000,000원</p>
          <p>100,000,000원</p>
          <p>2024-00-00 00:00</p>
        </div>
      </div>
    </div>

    <div class="page-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          fill-rule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="page-num">
        <p v-for="index in 5" :key="index" :class="{ active: index === 1 }">{{ index }}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Period from '@/components/common/Period.vue'
import Search from '@/components/common/Search.vue'
import { ref } from 'vue'

const isShowStatus = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.game-list-wrap {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 500;
  }

  .game-list {
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

      .add-game-button {
        width: 100px;
        background-color: $blue_hover;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .list {
      width: 100%;

      .th-wrap,
      .item {
        p {
          &:nth-child(1),
          &:nth-child(4),
          &:nth-child(5) {
            width: 50%;
          }
        }

        span {
          padding: 3px 8px;
          border: 1px solid $grey_3;
          border-radius: 50px;
          color: $grey_3;
          font-size: 14px;
          font-weight: 500;

          &.gaming {
            border: 1px solid $main_hover;
            color: $main_hover;
          }

          &.end {
            border: 1px solid #000;
            color: #000;
          }

          &.cancel {
            border: 1px solid $red;
            color: $red;
          }
        }
      }
    }
  }
}
</style>
