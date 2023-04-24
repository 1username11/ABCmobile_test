<template>
  <div class="main-wrapper">
    <h2 class="question"> {{ props.question }}</h2>
    <img :src="props.url" class="image">
    <svg v-if="props.enableSVG" class="gray-string" xmlns="http://www.w3.org/2000/svg" width="320" height="4" viewBox="0 0 320 4" fill="#F2F3F3">
      <rect opacity="0.15" width="320" height="4" fill="#F2F3F3" />
    </svg>
    <div class="answers">
      <div
        v-for="(answer, index) in props.answers" :key="index"
        :style="{ border: selectedCell === index ? '5px solid #FFC700' : ''}"
        class="answer"
        @click="selectCell(index)"
      >
        <p class="answer-text">{{ answer }}</p>
      </div>
    </div>
    <button
      :class="{ 'disabled': buttonDisabled }"
      :disabled="buttonDisabled"
      @click="router.push(`${props.nextQuestion}`)"
    >
      ДАЛЕЕ
    </button>
  </div>
</template>

<script lang="ts" setup>

import { router } from '@/router/router'
import { ref } from 'vue'

const selectedCell = ref(-1)

function selectCell (index: number) {
  selectedCell.value = index
  buttonDisabled.value = false
}
const buttonDisabled = ref(true)

const props = defineProps<{
  question: string
  url: string
  answers: string[]
  nextQuestion: string
  enableSVG: boolean
}>()
</script>
<style scoped>
.main-wrapper{
  padding: 63px 0px 25px 0px;
}
.question{
  margin-bottom: 2rem;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;

}
.image{
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
.answers{
  display:flex;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  justify-content: space-between;
    padding: 0px 16px 0px 16px;
}
.answer{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  width: 41px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 37px;
}
.answer-text{
  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;

}
button {
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
  border-radius: 20px;
  width: 189px;
  height: 41px;
  margin-bottom: 21px;
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

button.disabled {
  background: #DADADA;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 189px;
  height: 41px;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #8E8E8E;
}
.gray-string{
    margin-top: 24px;
    margin-bottom: 22px;
}
</style>
