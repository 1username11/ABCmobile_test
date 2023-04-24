<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'укажите ваш возраст:'
const answers = ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
const nextQuestion = '/third-question'
</script>
