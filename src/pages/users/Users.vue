<template>
  <main class="users-wrap">
    <p class="title">회원 관리</p>

    <div class="users-list">
      <div class="filter">
        <Search :title="'이름/아이디/닉네임/전화번호'" />
      </div>

      <div class="list">
        <div class="th-wrap">
          <p>이름</p>
          <p>아이디</p>
          <p>닉네임</p>
          <p>전화번호</p>
          <p>보유포인트</p>
          <p>가입일시</p>
        </div>
        <div v-for="item in 20" :key="item" class="item">
          <p>황예나</p>
          <p>dpsk419dpsk419dpsk419dpsk419</p>
          <p>예나예나예나예나예나</p>
          <p>01012341234</p>
          <p>100,000,000원</p>
          <p>2024-00-00 00:00:00</p>
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
import Search from '@/components/common/Search.vue'
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.users-wrap {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 500;
  }

  .users-list {
    background-color: #fff;
    padding: 30px 24px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 34px;
    border-radius: 8px;

    .list {
      width: 100%;
    }
  }
}
</style>
