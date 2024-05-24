<template>
  <main class="game-list-detail">
    <div class="title-button">
      <p class="title">게임 상세</p>
      <div class="button-wrap">
        <button>게임 시작</button>
        <!-- <button>게임 종료</button> -->
        <button>게임 취소</button>
        <button @click="$router.push('/game/edit')">수정</button>
      </div>
    </div>

    <div class="info-wrap">
      <div class="info">
        <p class="info-title">게임 정보</p>
        <div class="table">
          <div class="tr">
            <div class="th">
              <span>지점명</span>
              <p class="store">테스트</p>
            </div>
            <div class="th">
              <span>게임명</span>
              <p>테스트</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>게임 구분</span>
              <p>쿠폰1</p>
            </div>
            <div class="th">
              <span>게임 상태</span>
              <p>종료</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>게임 그룹</span>
              <p>테스트그룹</p>
            </div>
            <div class="th">
              <span>진행 구분</span>
              <p>예선</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>예선 반야 쿠폰 참가</span>
              <p>가능 (1개)</p>
            </div>
            <div class="th">
              <span>결제 수단</span>
              <p>포인트</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>참가자 수</span>
              <p>100,000명</p>
            </div>
            <div class="th">
              <span>참가비</span>
              <p>100,000원</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>총 참가비</span>
              <p>100,000,000원</p>
            </div>
            <div class="th">
              <span>참가당 발행칩</span>
              <p>100,000개</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>총 칩 수량</span>
              <p>100,000개</p>
            </div>
            <div class="th">
              <span>현재 시상 칩 합계</span>
              <p>100,000개</p>
            </div>
          </div>
        </div>
      </div>

      <div class="info">
        <p class="info-title">참가자 정보</p>
        <div class="list">
          <div class="th-wrap">
            <p class="user">회원명</p>
            <p>쿠폰 금액</p>
            <p>수량</p>
            <p>참가 금액</p>
            <p>참가일시</p>
          </div>
          <div v-for="(index, item) in 5" :key="item" class="item">
            <div class="user">
              <input type="checkbox" />
              <p>{{ index }}. 황예나 (test)</p>
              <!-- TODO: 이동 보류 <button @click="isShowModal = true" class="color">이동</button> -->
              <button>참가취소</button>
              <!-- <button class="color">재참가</button> -->
            </div>
            <p>100,000원</p>
            <p>100,000개</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p class="user">100,000명</p>
          <p>0원/100,000원</p>
          <p>100,000개</p>
          <p>100,000,000원</p>
          <p></p>
        </div>
        <div class="button-wrap">
          <label class="calc" for="calc">
            <input id="calc" type="checkbox" />
            <p>시상금 계산제외</p>
          </label>
          <div class="select-button">
            <div class="select-box-wrap">
              <div @click="isShowWinnerCalc = !isShowWinnerCalc" class="select-box">
                <p>쿠폰</p>
                <svg
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
              <div v-if="isShowWinnerCalc" class="select-list">
                <p v-for="item in 10" :key="item">쿠폰</p>
              </div>
            </div>
            <button class="winner-set">시상자 설정</button>
            <button>선택 참가자 종료</button>
          </div>
        </div>
      </div>

      <div class="info">
        <!-- TODO: 수정 예정 -->
        <p class="info-title">미결제자 정보</p>
        <div class="list">
          <div class="th-wrap">
            <p class="user">회원명</p>
            <p>쿠폰 금액</p>
            <p>수량</p>
            <p>참가 금액</p>
            <p>참가일시</p>
          </div>
          <div v-for="(index, item) in 5" :key="item" class="item">
            <div class="user">
              <input type="checkbox" />
              <p>{{ index }}. 황예나 (test)</p>
              <!-- TODO: 이동 보류 <button @click="isShowModal = true" class="color">이동</button> -->
              <button>참가취소</button>
              <!-- <button class="color">재참가</button> -->
            </div>
            <p>100,000원</p>
            <p>100,000개</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p class="user">100,000명</p>
          <p>0원/100,000원</p>
          <p>100,000개</p>
          <p>100,000,000원</p>
          <p></p>
        </div>
        <div class="button-wrap">
          <div class="select-button">
            <button class="payment-submit">결제 확인</button>
          </div>
        </div>
      </div>

      <div class="info">
        <p class="info-title">시상자 정보</p>
        <div class="list">
          <div class="th-wrap">
            <p>회원명</p>
            <p>시상 금액</p>
            <p>참가 금액</p>
            <p>시상일시</p>
          </div>
          <div v-for="item in 5" :key="item" class="item">
            <p>황예나 (test)</p>
            <p>100,000원</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p></p>
          <p>100,000원</p>
          <p>100,000원</p>
          <p></p>
        </div>
      </div>

      <div class="info">
        <p class="info-title">종료된 참가자 정보</p>
        <div class="list">
          <div class="th-wrap">
            <p>회원명</p>
            <p>수량</p>
            <p>참가 금액</p>
            <p>참가일시</p>
            <p>종료일시</p>
          </div>
          <div v-for="item in 5" :key="item" class="item">
            <p>황예나 (test)</p>
            <p>100,000개</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p></p>
          <p>100,000개</p>
          <p>100,000원</p>
          <p></p>
          <p></p>
        </div>
      </div>

      <div class="info">
        <p class="info-title">취소된 정보</p>
        <div class="list">
          <div class="th-wrap">
            <p>회원명</p>
            <p>수량</p>
            <p>참가 금액</p>
            <p>참가일시</p>
          </div>
          <div v-for="item in 5" :key="item" class="item">
            <p>황예나 (test)</p>
            <p>100,000개</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p></p>
          <p>100,000개</p>
          <p>100,000원</p>
          <p></p>
        </div>
      </div>
    </div>

    <!-- <MoveGameUserModal v-if="isShowModal" @isShowModal="isShowModal = false" /> -->
  </main>
</template>

<script lang="ts" setup>
// import MoveGameUserModal from '@/components/modal/MoveGameUserModal.vue'
import { ref } from 'vue'

const isShowWinnerCalc = ref<boolean>(false)
// const isShowModal = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.game-list-detail {
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

    .button-wrap {
      display: flex;
      gap: 5px;

      button {
        width: 100px;
        font-size: 15px;
        font-weight: 500;

        &:nth-child(1) {
          background-color: $blue_hover;
          color: #fff;
        }

        &:nth-child(2) {
          border: 1px solid $grey_2;
          background-color: #fff;
          color: $grey_4;
        }

        &:nth-child(3) {
          width: 70px;
          background-color: $grey_5;
          color: #fff;
        }
      }
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

      .table {
        p {
          &.store {
            text-decoration: underline;
            cursor: pointer;

            &:hover {
              color: $blue_hover;
            }
          }
        }
      }

      .list {
        .th-wrap {
          p {
            &.user {
              width: 170%;
            }
          }
        }

        .item {
          cursor: default;

          &:hover {
            p {
              color: #000;
            }
          }

          .user {
            width: 170%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            p {
              width: auto;
              text-decoration: underline;
              cursor: pointer;

              &:hover {
                color: $blue_hover;
              }
            }

            button {
              padding: 4px 10px;
              border: 1px solid $grey_2;
              background-color: #fff;
              color: $grey_4;
              font-size: 12px;

              &.color {
                background-color: $grey_5;
                border: none;
                color: #fff;
              }
            }
          }
        }
      }

      .total-wrap {
        height: 50px;
        background-color: $grey_5;
        display: flex;
        align-items: center;
        border-radius: 8px;
        color: #fff;

        p {
          width: 100%;
          display: flex;
          justify-content: center;

          &.user {
            width: 170%;
          }
        }
      }

      .button-wrap {
        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .calc {
          display: flex;
          cursor: pointer;
        }

        .select-button {
          display: flex;
          gap: 10px;

          .select-box-wrap {
            .select-list {
              height: 150px;
            }
          }

          button {
            padding: 10px 14px;
            border: 1px solid $grey_2;
            background-color: #fff;
            color: $grey_4;
            font-size: 15px;
            font-weight: 500;

            &.winner-set {
              background-color: $blue_hover;
              border: none;
              color: #fff;
            }

            &.payment-submit {
              width: 140px;
              background-color: $blue_hover;
              border: none;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
