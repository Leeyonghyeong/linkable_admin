<template>
  <main>
    <p class="title">게임 상세</p>

    <div class="info-wrap">
      <div class="info">
        <p class="info-title">게임 정보</p>
        <div class="table">
          <div class="tr">
            <div class="th">
              <span>지점명</span>
              <p>테스트</p>
            </div>
            <div class="th">
              <span>게임명</span>
              <p>테스트</p>
            </div>
          </div>
          <div class="tr">
            <div class="th">
              <span>게임 구분</span>
              <p>반약쿠폰</p>
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
            <p>회원명</p>
            <!-- <p>반야쿠폰</p> -->
            <p>쿠폰 금액</p>
            <p>수량</p>
            <p>참가 금액</p>
            <p>참가일시</p>
          </div>
          <div v-for="(index, item) in 5" :key="item" class="item">
            <p><input type="checkbox" />{{ index }}. 황예나 (test)</p>
            <!-- <p>100개</p> -->
            <p>100,000원</p>
            <p>100,000개</p>
            <p>100,000원</p>
            <p>2024.00.00 00:00:00</p>
          </div>
        </div>
        <div class="total-wrap">
          <p>100,000명</p>
          <p>0원/100,000원</p>
          <p>100,000개</p>
          <p>100,000,000원</p>
          <p></p>
        </div>
        <div class="button-wrap">
          <p><input type="checkbox" />시상금 계산제외</p>
          <div class="select-button">
            <div class="select-box-wrap">
              <div class="select-box">
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
              <div class="select-list">
                <p>test</p>
              </div>
            </div>
            <button class="winner-set">시상자 설정</button>
          </div>
          <button>선택 참가자 이동</button>
          <button>선택 참가자 종료</button>
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
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

main {
  padding: 43px 80px 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .title {
    font-size: 24px;
    font-weight: 500;
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
        }
      }

      .button-wrap {
        margin-top: 32px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
