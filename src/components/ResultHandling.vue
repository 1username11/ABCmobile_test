<template>
  <div class="result-handling-container">
    <p class="result-handling">Обработка результатов</p>
    <div class="lds-default"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
    <p class="second-paragraph">
      <span>Определение стиля мышления...........</span>
      <span>........................................................</span>
    </p>
  </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['resultHandling'])
async function resultHandling () {
  emits('resultHandling')
}
onMounted(() => resultHandling())
</script>

<style scoped>
span{
    display: block;
}
.result-handling{
    width: 237px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.05em;
    margin: 20px auto 33px auto;
    color: #FFFFFF;
}
.second-paragraph{
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.05em;
    width: 276px;
    text-align: left;
    margin: 27px auto 196px auto;
    color: #FFFFFF;

}
.lds-default {
    display: inline-block;
    position: relative;
    color: #3BDE7C;
    width: 80px;
    height: 80px;
}
.lds-default div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
}
.lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
}
.lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
}
.lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
}
.lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
}
.lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
}
.lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
}
.lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
}
.lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
}
.lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
}
.lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
}
.lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
}
@keyframes lds-default {
    0%, 20%, 80%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}
</style>
