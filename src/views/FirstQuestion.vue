<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'ваш пол:'
const answers = ['мужчина', 'женщина']
const nextQuestion = '/second-question'
</script>

<style scoped>

</style>
