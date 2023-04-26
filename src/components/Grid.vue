<template>
  <h2>{{ question }}</h2>
  <div class="grid">
    <div
      v-for="(color, index) in props.colors" :key="index"
      class="cell"
      :style="{ backgroundColor: color, border: selectedCell === index ? '5px solid #FFC700' : '5px solid ' + color }"
      @click="selectCell(index)"
    />
  </div>
  <NextButton :selectedAnswer="!buttonDisabled" @nextQuestion="onNextQuestion" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedCell = ref(-1)

function selectCell (index: number) {
  selectedCell.value = index
  buttonDisabled.value = false
}
const props = defineProps<{
  colors: string[]
  question: string
}>()
const buttonDisabled = ref(true)
const emits = defineEmits(['nextQuestion'])
function onNextQuestion () {
  buttonDisabled.value = true
  selectedCell.value = -1
  emits('nextQuestion')
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 21px;
    width: 267px;
    height: 267px;
    margin-bottom: 34px;
}

.cell {
    width: 75px;
    height: 75px;
    cursor: pointer;
    border-radius: 0;
}

h2 {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    /* or 121% */

    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-top: 28px;
    margin-bottom: 20px;
}

</style>
