<template>
  <div>
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
    <NextButton :selectedAnswer="!buttonDisabled" @nextQuestion="onNextQuestion" />
  </div>
</template>

<script lang="ts" setup>
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
  enableSVG?: boolean
}>()
const emits = defineEmits(['nextQuestion'])
function onNextQuestion () {
  buttonDisabled.value = true
  selectedCell.value = -1
  emits('nextQuestion')
}
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
.gray-string{
    margin-top: 24px;
    margin-bottom: 22px;
}
</style>
