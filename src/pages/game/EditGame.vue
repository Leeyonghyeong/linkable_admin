<template>
  <main>
    <p class="title">게임 수정</p>

    <div class="add-game-group">
      <div class="table">
        <div class="tr input">
          <div class="th">
            <span>지점명</span>
            <div class="th-wrap">
              <div class="select-box-wrap">
                <div @click="isShowStore = !isShowStore" class="select-box">
                  <p></p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path
                      fill-rule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div v-if="isShowStore" class="select-list">
                  <p v-for="item in 20" :key="item">test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="th">
            <span>결제 수단</span>
            <div class="th-wrap">
              <label for="point">
                <input name="type" id="point" type="radio" />
                포인트
              </label>
              <label for="coupon">
                <input name="type" id="coupon" type="radio" />
                쿠폰
              </label>
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="th">
            <span>게임 구분</span>
            <div class="th-wrap">
              <label for="normal">
                <input name="type" id="normal" type="radio" />
                일반
              </label>
              <label for="chip">
                <input name="type" id="chip" type="radio" />
                칩
              </label>
              <label for="coupon">
                <input name="type" id="coupon" type="radio" />
                쿠폰
              </label>
            </div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <span>게임명</span>
            <div class="th-wrap">
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="th">
            <span>수수료 판매타입</span>
            <div class="th-wrap">
              <label for="a">
                <input name="type" id="a" type="radio" />
                A타입
              </label>
              <label for="b">
                <input name="type" id="b" type="radio" />
                B타입
              </label>
            </div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <span>참가비</span>
            <div class="th-wrap"><input type="number" /> 원</div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <span>시상금 비율</span>
            <div class="th-wrap"><input type="number" /> % (0원 * 참가자 수)</div>
          </div>
        </div>
        <div class="tr input_2">
          <div class="th">
            <span>게임 설명</span>
            <div class="th-wrap">
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
      <button class="submit">저장</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isShowStore = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 500;
  }

  .add-game-group {
    background-color: #fff;
    padding: 30px 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 34px;
    border-radius: 8px;

    .table {
      width: 100%;

      .tr {
        &.input {
          .th {
            height: 80px;

            .th-wrap {
              .select-box-wrap {
                .select-list {
                  height: 228px;
                  padding: 0;
                  flex-direction: column;
                }
              }

              input {
                width: 340px;
                height: 38px;
                padding: 0 8px;
                border: 1px solid $grey_2;
                border-radius: 4px;
                font-size: 16px;

                &::-webkit-inner-spin-button {
                  appearance: none;
                  -moz-appearance: none;
                  -webkit-appearance: none;
                }
              }

              .date-picker {
                padding: 0;
              }
            }
          }
        }

        &.input_2 {
          .th {
            height: 150px;

            .th-wrap {
              padding: 20px 12px;
              box-sizing: border-box;
              height: 100%;

              textarea {
                width: 600px;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid $grey_2;
                border-radius: 4px;
                font-size: 16px;
              }
            }
          }
        }

        .th {
          .th-wrap {
            padding-left: 12px;
            display: flex;
            align-items: center;
            gap: 20px;

            label {
              display: flex;
              align-items: center;
              gap: 2px;
              cursor: pointer;
            }
          }
        }
      }
    }

    .submit {
      width: 140px;
      height: 38px;
      background-color: $blue_hover;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
