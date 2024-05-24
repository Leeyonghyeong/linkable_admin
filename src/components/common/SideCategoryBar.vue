<template>
  <main>
    <!-- TODO: 로고 변경 예정 -->
    <img class="logo" src="@/assets/img/logo.png" alt="링커블" />

    <div class="category-list">
      <div :class="{ active: isShowGameCategory }" class="item">
        <div @click="isShowGameCategory = !isShowGameCategory" class="category">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                fill-rule="evenodd"
                d="M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>게임 관리</p>
          </div>
          <div class="button">
            <svg
              v-if="isShowGameCategory"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div v-if="isShowGameCategory" class="low-category-wrap">
          <p @click="moveUrlHandler('/game/list')" :class="{ active: $route.path.includes('/game/list') }">게임 목록</p>
          <p @click="moveUrlHandler('/game/group')" :class="{ active: $route.path.includes('/game/group') }">
            게임 그룹
          </p>
        </div>
      </div>
      <div :class="{ active: $route.path.includes('/coupon') }" class="item">
        <div @click="moveUrlHandler('/coupon')" class="category">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                fill-rule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>쿠폰 관리</p>
          </div>
        </div>
      </div>
      <div :class="{ active: $route.path.includes('/store') }" class="item">
        <div @click="moveUrlHandler('/store')" class="category">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
              />
              <path
                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
              />
            </svg>
            <p>지점 관리</p>
          </div>
        </div>
      </div>
      <div :class="{ active: $route.path.includes('/users') }" class="item">
        <div @click="moveUrlHandler('/users')" class="category">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
              />
            </svg>
            <p>회원 관리</p>
          </div>
        </div>
      </div>
    </div>

    <div class="user-logout">
      <p>황예나</p>
      <div class="logout">
        로그아웃
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path
            fill-rule="evenodd"
            d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isShowGameCategory = ref<boolean>(false)

const moveUrlHandler = (url: string) => {
  if (!url.includes('/game')) {
    isShowGameCategory.value = false
  }

  router.push(url)
}

onMounted(() => {
  if (route.path.includes('/game')) {
    isShowGameCategory.value = true
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  position: relative;
  width: 280px;
  height: 100vh;
  padding: 30px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(25, 25, 25, 0.05);

  .logo {
    width: 100px;
  }

  .category-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &.active {
        .category {
          background-color: $grey_0;
          border-radius: 4px;
        }

        .low-category-wrap {
          padding: 8px 8px 12px 37px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;

          p {
            cursor: pointer;

            &:hover,
            &.active {
              color: $blue_hover;
              font-weight: 500;
            }
          }
        }
      }

      .category {
        padding: 12px 8px;
        display: flex;
        justify-content: space-between;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: $grey_0;
        }

        svg {
          width: 20px;
        }

        div {
          display: flex;
          align-items: center;
          gap: 4px;

          p {
            font-size: 17px;
            font-weight: 500;
          }
        }
      }
    }
  }

  .user-logout {
    position: absolute;
    bottom: 20px;
    width: calc(100% - 36px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: $grey_4;
      font-size: 15px;
      font-weight: 500;
    }

    .logout {
      display: flex;
      align-items: center;
      gap: 4px;
      color: $grey_3;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        color: $blue_hover;
        font-weight: 500;
      }

      svg {
        width: 16px;
      }
    }
  }
}
</style>
