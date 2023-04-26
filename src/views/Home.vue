<template class="template-class">
  <div class="wrapper-class">
    <p class="first-string">
      Пройдите точный и быстрый
    </p>
    <p class="second-string">
      ТЕСТ НА
    </p>
    <div class="third-string-wrapper">
      <p>
        <span class="span-class">ОПРЕДЕЛЕНИЕ</span>
        <span class="span-class">IQ</span>
      </p>
    </div>
    <div class="image-wrapper">
      <img class="brain-image" src="@/assets/staticResource/home/rain_bk3.png">
    </div>

    <ToTestButton />
    <p class="fourth-string">
      <span class="fourth-string-span">
        и получите рекомендации
      </span>
      <span class="fourth-string-span">
        по развитию своего интеллекта
      </span>
    </p>
    <p class="fifth-string">
      <span class="fifth-string-span">
        и улучшению финансового
      </span>
      <span class="fifth-string-span">
        благосостояния и личной жизни
      </span>
    </p>
    <div class="to-detail">
      <button class="detailButton" @click="router.push('/test-info')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8" height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.45453 7.63636L4.45453 2.10454L6.99544 4.64545L7.63635 4L3.99999 0.363632L0.363625 4L1.00453
                  4.6409L3.54544 2.10454L3.54544 7.63636L4.45453 7.63636Z"
            fill="#0C0B10"
          />
        </svg>
      </button>
      <p>
        Подробнее
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToTestButton from '@/components/ToTestButton.vue'
import { router } from '@/router/router'
</script>

<style lang="scss">
.template-class{
}
.wrapper-class{
  padding-top: 73px;
  text-align: center;
  justify-items: center;
  background-image: url("src/assets/staticResource/home/rain_bk2.png");

.first-string{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  }
.second-string{
  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.03em;
  margin-top: 20px;
  color: #FFC700;
  }
  .third-string-wrapper{
    margin-top: 15px;
    height: 50px;
    display: flex;
    justify-content: center; /* вирівнювання по горизонталі */
    align-items: center; /* вирівнювання по вертикалі */
  }
  .span-class{
    font-family: 'Yeseva One';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.03em;
    display: block;
    color: #FFC700;
  }
  .image-wrapper{
    display: flex;
    justify-content: center;
  }
  .brain-image{
    margin-top: 30px;
    width: 150px;
    height: 150px;

  }
  .fourth-string{
    margin-top: 22px;
    color: #FFC700;
  }
  .fourth-string-span{
    display: block;
  }
.fifth-string{
  color: white;
}
  .fifth-string-span{
    display: block;
  }
.to-detail{
  margin-top: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    :last-child{
      color: white;
    }
  }
  .detailButton{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-width: 1px;
    border-radius: 9999px;
    border-color: white;
    --tw-bg-opacity: 1;
    background-color: white;
  }

}

</style>
