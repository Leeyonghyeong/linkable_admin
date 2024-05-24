<template>
  <main>
    <p class="title">게임 그룹 생성</p>

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
        <div class="tr">
          <div class="th">
            <span>그룹명</span>
            <div>
              <input type="text" />
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

<script lang="ts" setup></script>

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
        &:nth-child(2) {
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
