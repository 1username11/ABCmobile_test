<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'Какой из городов лишний?'
const answers = ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
const nextQuestion = '/ninth-question'
// const progress = 50
</script>
