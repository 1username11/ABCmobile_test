<template>
  <div class="banner-with-brain-wrapper">
    <p class="info-text-on-banner-with-brain">
      Также по результатам теста
      <span>ВЬІ ПОЛУЧИТЕ </span>
      подробные
      <span>СОВЕТЬІ</span>
      по определению наиболее перспективной
      <span>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЬІ ДЕЯТЕЛЬНОСТИ</span>,
      которая принесет вам скорейший финансовый результат.
    </p>
    <div class="brain-img-wrapper">
      <img src="@/assets/staticResource/testInfo/325-01.jpg">
    </div>
    <ToTestButton class="to-test-button" />
  </div>
</template>

<style lang="scss">
.banner-with-brain-wrapper{
  padding: 38px 11px 40px 11px;
  text-align: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
}
.info-text-on-banner-with-brain{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;

  letter-spacing: 0.05em;
  & > *{
    font-weight: 900;
  }
}
.to-test-button{
  background: #FFC700;
  color: #0D0C11;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #0D0C11;
}
.brain-img-wrapper{
  margin-top: 35px;
  margin-bottom: -25px;
}
</style>
