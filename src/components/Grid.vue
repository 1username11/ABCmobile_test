<template>
  <div class="form ">
    <h2>{{ question }}</h2>
    <div class="grid">
      <div
        v-for="(color, index) in props.colors" :key="index"
        class="cell"
        :style="{ backgroundColor: color, border: selectedCell === index ? '5px solid #FFC700' : '5px solid ' + color }"
        @click="selectCell(index)"
      />
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
import { ref } from 'vue'
import { router } from '@/router/router'

const selectedCell = ref(-1)

function selectCell (index: number) {
  selectedCell.value = index
  buttonDisabled.value = false
}
const props = defineProps<{
  colors: string[]
  question: string
  nextQuestion: string
}>()
const buttonDisabled = ref(true)
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
.form {
    display: flex;
    flex-direction: column;
    background-size: cover;
    align-items: center;
    text-align: center;
    padding-top: 63px;
    margin: 0 auto;
    background-image: url("@/assets/staticResource/testInfo/rain_bk2.jpg");
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
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 28px;
    margin-bottom: 20px;
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
</style>
