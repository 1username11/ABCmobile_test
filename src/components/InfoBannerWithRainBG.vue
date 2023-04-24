<template>
  <div class="main-wrapper">
    <p class="first-text-unit">
      Прохождение теста займет у вас не более
      <span>12 минут</span>
      , а его
      <span>результаты</span>
      вы сможете
      <span>использовать всю жизнь.</span>
    </p>
    <p class="second-text-unit">
      Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить все аспекты своей жизни: от финансового до любовного.
    </p>
    <button class="to-test-button">
      ПРОЙТИ ТЕСТ
    </button>
    <div class="test-info-footer">
      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="#FFFFFF">

        <path d="M1.71836 3.46168C1.95365 3.46168 2.15924 3.39037 2.33512 3.24777C2.51099 3.10517 2.60844 2.92692 2.62745 2.71301H3.25134C3.23945 2.93405 3.1634 3.14439 3.02317 3.34403C2.88295 3.54367 2.69519 3.70291 2.45989 3.82175C2.22698 3.94058 1.9798 4 1.71836 4C1.19311 4 0.774807 3.82531 0.463458 3.47594C0.154486 3.12418 0 2.64409 0 2.03565V1.92513C0 1.54961 0.0689245 1.21569 0.206774 0.923351C0.344623 0.631016 0.541889 0.40404 0.798574 0.242424C1.05764 0.0808081 1.36304 0 1.71479 0C2.14736 0 2.50624 0.129531 2.79144 0.388592C3.07903 0.647653 3.23232 0.983957 3.25134 1.3975H2.62745C2.60844 1.14795 2.51337 0.943553 2.34225 0.784314C2.1735 0.622698 1.96435 0.541889 1.71479 0.541889C1.37968 0.541889 1.11943 0.663102 0.934046 0.905526C0.75104 1.14557 0.659537 1.49376 0.659537 1.95009V2.07487C0.659537 2.51931 0.75104 2.86156 0.934046 3.1016C1.11705 3.34165 1.37849 3.46168 1.71836 3.46168Z" fill="white" fill-opacity="0.5" />
      </svg>
      <p>2019</p>
    </div>
  </div>
</template>

<style lang="scss">
.main-wrapper{
  padding: 56px 12px 25px 12px;
  text-align: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  background-image: url("@/assets/staticResource/testInfo/rain_bk2.jpg");
}
.first-text-unit{
  color: white;
  font-family: 'Merriweather';
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
    :first-child{
      font-weight: bolder;
      color: #FFC700;
    }
  :nth-child(2){
    font-weight: bolder;
  }
  :last-child{
    font-weight: bolder;
    color: #FFC700;
  }
}
.second-text-unit{
  max-width: 303px;
  text-align: left;
  padding: 29px 13px 31px 14px;
  background:  rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: 0.05em;
}
.to-test-button{
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  width: 200px;
  height: 44px;
  color: white;
  margin-top: 33px;
}
.test-info-footer{
  margin-top: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.05em;

  color: rgba(255, 255, 255, 0.5);
  :first-child{
    border: 0.8px solid rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    width: 8px;
    height: 8px;
  }
}
</style>
