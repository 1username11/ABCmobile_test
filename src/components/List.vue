<template>
  <div class="question">{{ props.question }}</div>
  <img v-if="imageUrl" :src="imageUrl" class="optional-image">
  <div class="answers">
    <div
      v-for="(answer, index) in props.answers"
      :key="index"
      class="answer"
      :class="{ 'active': selectedAnswer === answer }"
    >
      <input
        :id="`answer-${index}`"
        v-model="selectedAnswer"
        type="radio"
        :value="answer"
      >
      <label :for="`answer-${index}`">{{ answer }}</label>
    </div>
  </div>
  <NextButton :selectedAnswer="selectedAnswer" @nextQuestion="onNextQuestion" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedAnswer = ref(false)

const props = defineProps<{
  question: string
  answers: string[]
  imageUrl?: string
  nextQuestion: number
}>()
const emits = defineEmits(['nextQuestion'])
function onNextQuestion () {
  selectedAnswer.value = false
  emits('nextQuestion')
}
</script>

<style scoped>
.optional-image{
  width: 173px;
    height: 115px;
    margin: 0px auto 16px auto;
}

.question {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    max-width: 300px;

    text-align: center;
    letter-spacing: 0.05em;

    color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;

}

.answers {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.answer {
    display: flex;
    flex-direction: row;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem;
    margin-bottom: 8px;
    width: 100%;

}
.answer.active {
    background-color: #FFC700;
}

.answer.active label {
    color: black;
}
label {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    /* or 111% */

    letter-spacing: 0.05em;

    text-align: left;

    color: #FFFFFF;

}

input[type='radio'] {
    margin-right: 1rem;
    color: aqua;
}

</style>
