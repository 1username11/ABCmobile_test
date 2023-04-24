<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'Выберите лишнее:'
const answers = ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'ХИжина']
const nextQuestion = '/fifth-question'
</script>
