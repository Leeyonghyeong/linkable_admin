<template>
  <main class="game-group-detail">
    <div class="title-button">
      <p class="title">게임 그룹 상세</p>
      <button @click="$router.push('/game/group/edit')">수정</button>
    </div>

    <div class="info-wrap">
      <div class="info">
        <p class="info-title">그룹 정보</p>
        <div class="table">
          <div class="tr">
            <div class="th">
              <span>그룹명</span>
              <p>테스트 테스트</p>
            </div>
          </div>
          <div class="tr">
            <!-- TODO: 반야쿠폰 삭제예정 -->
            <div class="th">
              <span>반야쿠폰 금액</span>
              <p>100,000원</p>
            </div>
            <div class="th">
              <span>반야쿠폰 만료일</span>
              <p>2024-00-00 00:00</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info">
        <div class="info-title-wrap">
          <p class="info-title">반야 쿠폰</p>
          <div class="add-coupon">
            <input type="number" placeholder="수량 입력" />
            <button>추가발행</button>
          </div>
        </div>
        <div class="list">
          <div class="th-wrap">
            <p>상태</p>
            <p>소유자</p>
            <p>액션</p>
            <p>생성일시</p>
            <p>변경일시</p>
          </div>
          <div v-for="item in 20" :key="item" class="item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>홀드</p>
            <p>황예나</p>
            <p>게임참가</p>
            <p>2024-00-00 00:00</p>
            <p>2024-00-00 00:00</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

.game-group-detail {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .title-button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 24px;
      font-weight: 500;
    }

    button {
      width: 70px;
      height: 40px;
      background-color: $grey_5;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .info-wrap {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .info {
      padding: 30px 24px;
      background-color: #fff;
      border-radius: 8px;

      .info-title {
        margin-bottom: 24px;
        font-size: 18px;
        font-weight: 500;
      }

      .info-title-wrap {
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .info-title {
          margin: 0;
        }

        .add-coupon {
          display: flex;
          align-items: center;
          border: 1px solid $grey_2;
          border-radius: 4px;
          overflow: hidden;

          input {
            width: 180px;
            height: 38px;
            padding: 0 0 0 8px;
            box-sizing: border-box;
            border-radius: 4px;
            border: none;
            font-size: 15px;

            &::-webkit-inner-spin-button {
              appearance: none;
              -moz-appearance: none;
              -webkit-appearance: none;
            }
          }

          button {
            background-color: $blue_hover;
            color: #fff;
            border-radius: 0;
            font-size: 15px;
          }
        }
      }

      .list {
        .item {
          position: relative;
          cursor: default;

          &:hover {
            p {
              color: #000;
            }
          }

          svg {
            position: absolute;
            left: 24px;
            width: 18px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
