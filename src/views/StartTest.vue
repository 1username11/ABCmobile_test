<template>
  <div class="container">
    <ProgressBar v-if="currentQuestion.order !== 13" :progress="(progressStep + 1)/12 * 100" />
    <List
      v-if="currentQuestion.type === 'List' "
      :question="currentQuestion.question"
      :answers="currentQuestion.variants"
      :next-question="progressStep.value"
      :imageUrl="currentQuestion?.url"
      @nextQuestion="progressStep++"
    />
    <Grid
      v-else-if="currentQuestion.type === 'Grid'"
      :question="currentQuestion.question"
      :colors="currentQuestion.variants"
      @nextQuestion="progressStep++"
    />
    <Image
      v-else-if="currentQuestion.type === 'Image'"
      :question="currentQuestion.question"
      :answers="currentQuestion.variants"
      :enableSVG="currentQuestion.enableSVG"
      :url="currentQuestion.url"
      @nextQuestion="progressStep++"
    />
    <ResultHandling
      v-else-if="currentQuestion.type === 'Result Handling'"
      @resultHandling="resultHandling"
    />
    <Finish v-else :res="character" @req="fetchData" />
  </div>
</template>
<script lang="ts" setup>
import List from '@/components/List.vue'
import Image from '@/components/Image.vue'
import Grid from '@/components/Grid.vue'
import ResultHandling from '@/components/ResultHandling.vue'
import axios from 'axios'

const progressStep = ref(0)
const currentQuestion = computed(() => {
  return questionList.value[progressStep.value]
})
function resultHandling () {
  setTimeout(() => progressStep.value++, 5000)
}
const character = ref()
async function fetchData () {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${randomInt(1, 85)}/`)
    character.value = res.data
  } catch (e) {
    console.log(e)
  }
}

const questionList = ref([
  {
    type: 'List',
    question: 'Ваш пол:',
    variants: ['Мужчина', 'Женщина'],
    order: 1
  },
  {
    type: 'List',
    question: 'Укажите ваш возраст: ',
    variants: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36'],
    order: 2
  },
  {
    type: 'List',
    question: 'Выберите лишнее:',
    variants: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
    order: 3
  },
  {
    type: 'List',
    question: 'Продолжите числовой ряд: 18  20  24  32',
    variants: ['62', '48', '74', '57', '60', '77'],
    order: 4
  },
  {
    type: 'Grid',
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    variants: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC'],
    order: 5
  },
  {
    type: 'Grid',
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    variants: ['#A95403', '#0000A9', '#00A701', '#A8A8A8', '#850068', '#F60100', '#FDFF19', '#000000', '#46B3AC'],
    order: 6
  },
  {
    type: 'List',
    question: 'Какой из городов лишний?',
    variants: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
    order: 7
  },
  {
    type: 'Image',
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    url: 'src/assets/staticResource/tests/image.png',
    variants: ['1', '2', '3', '4'],
    enableSVG: false,
    order: 8
  },
  {
    type: 'List',
    question: 'Вам привычнее и важнее:',
    variants: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее'],
    order: 9
  },
  {
    type: 'List',
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    url: 'src/assets/staticResource/tests/image2.png',
    variants: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия'],
    order: 10
  },
  {
    type: 'Image',
    question: 'Вставьте подходящее число',
    url: 'src/assets/staticResource/tests/image3.png',
    variants: ['34', '36', '53', '44', '66', '42'],
    enableSVG: true,
    order: 11
  },
  {
    type: 'Result Handling',
    order: 12
  },
  {
    type: 'Finish',
    order: 13
  }
])
function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

</script>
