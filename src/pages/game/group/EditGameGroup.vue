<template>
  <main>
    <p class="title">게임 그룹 수정</p>

    <div class="add-game-group">
      <div class="table">
        <div class="tr">
          <div class="th">
            <span>타입</span>
            <div>
              <label for="chip">
                <input name="type" id="chip" type="radio" />
                칩
              </label>
              <label for="seed">
                <input name="type" id="seed" type="radio" />
                시드권
              </label>
            </div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <span>그룹명</span>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <!-- TODO: 반야쿠폰 삭제예정 -->
            <span>쿠폰 금액</span>
            <div><input type="number" /> 원</div>
          </div>
        </div>
        <div class="tr">
          <div class="th">
            <span>쿠폰 판매타입</span>
            <div>
              <label for="straight">
                <input name="type" id="straight" type="radio" />
                바로 매입
              </label>
              <label for="individual">
                <input name="type" id="individual" type="radio" />
                개인간 거래
              </label>
            </div>
          </div>
        </div>
        <div class="tr input">
          <div class="th">
            <span>쿠폰 만료일시</span>
            <div>
              <VueDatePicker class="date-picker" :enable-time-picker="false" locale="ko" range></VueDatePicker>
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="th">
            <span>상태</span>
            <div>
              <label for="active">
                <input name="status" id="active" type="radio" />
                활성화
              </label>
              <label for="disabled">
                <input name="status" id="disabled" type="radio" />
                비활성화
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="submit">저장</button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
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

            div {
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

        .th {
          div {
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
