<template>
  <div class="finish">
    <p class="finish-header">
      Ваш результат рассчитан:
    </p>
    <p class="descripion">
      <span class="descripion-span">Вы относитесь к 3%</span>  респондентов,  чей уровень интеллекта более чем на
      15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <p class="hurry-up-text">
      Скорее получите свой результат!
    </p>
    <div class="security-wrapper">
      В целях защиты персональных
      данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </div>
    <Countdown />
    <ResultButton @req="$emit('req')" />
    <table>
      <tr v-for="(value, key) in res" :key="key">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
defineEmits(['req'])
defineProps<{
  res: object
}>()
</script>
<style scoped>
table{
    margin: 15px auto 20px auto;
  max-width: 300px;
    border: 1px #FFC700 solid;
}
tr{
    border: 1px #FFC700 solid;
}
td{
    text-align: left;
    color: #DADADA;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
    padding-left: 15px;
    border: 1px #FFC700 solid;

}
.finish{
    display: flex;
    flex-direction: column;
}

.finish-header{
    margin-top: -45px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
}
.descripion{
    margin-top: 13px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
}
.descripion-span{
    text-decoration-line: underline;
}
.hurry-up-text{
    margin-top: 22px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3BDE7C;
}
.security-wrapper{
    margin-top: 13px;
    padding: 15px 12px 15px 12px;
    background: #1C2741;
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;

}
</style>
