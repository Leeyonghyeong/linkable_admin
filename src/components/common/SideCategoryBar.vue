<template>
  <main>
    <!-- TODO: 로고 변경 예정 -->
    <img class="logo" src="@/assets/img/logo.png" alt="링커블" />

    <div class="category-list">
      <div :class="{ active: isShowGameCategory }" class="item">
        <div @click="isShowGameCategory = !isShowGameCategory" class="category">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
            <p>게임</p>
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
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
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
      <div :class="{ active: $route.path.includes('/store') }" class="item">
        <div @click="moveUrlHandler('/store')" class="category">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            <p>지점</p>
          </div>
        </div>
      </div>
      <div :class="{ active: $route.path.includes('/users') }" class="item">
        <div @click="moveUrlHandler('/users')" class="category">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <p>회원</p>
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
