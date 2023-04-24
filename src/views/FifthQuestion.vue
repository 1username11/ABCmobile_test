<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'Продолжите числовой ряд:\n' +
    ' 18  20  24  32  '
const answers = ['62', '48', '74', '57', '60', '77']
const nextQuestion = '/sixth-question'
</script>
