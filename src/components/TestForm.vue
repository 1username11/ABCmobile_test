<template>
  <div class="container">
    <ProgressBar :progress="10" />
    <div class="question">{{ props.question }}</div>
    <img v-if="imageUrl" :src="imageUrl" class="optional-image">
    <div class="answers">
      <div v-for="(answer, index) in props.answers" :key="index" class="answer" :class="{ 'active': selectedAnswer }">
        <input
          :id="`answer-${index}`"
          v-model="selectedAnswer"
          type="radio"
          :value="answer"
        >
        <label :for="`answer-${index}`">{{ answer }}</label>
      </div>
    </div>
    <button
      :class="{ 'disabled': !selectedAnswer }"
      :disabled="!selectedAnswer"
      @click="router.push(`${props.nextQuestion}`)"
    >
      ДАЛЕЕ
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { router } from '@/router/router'

const selectedAnswer = ref(null)
const props = defineProps<{
  question: string
  answers: string[]
  nextQuestion: string
  imageUrl?: string
}>()
</script>

<style scoped>
.optional-image{
  width: 173px;
    height: 115px;
    margin: 16px auto 16px auto;
}
.container {
    padding: 63px 0px 25px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('@/assets/staticResource/testInfo/rain_bk2.jpg');
    background-size: cover;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    min-height: 568px;
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
    text-transform: uppercase;

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

label {

    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 31px;
    /* or 163% */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;

}

input[type='radio'] {
    margin-right: 1rem;
}

button {
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
    border-radius: 20px;
    width: 189px;
    height: 41px;
    margin-top: 35px;
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
</style>
