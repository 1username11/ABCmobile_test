<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts"  setup>
const question = 'Вам привычнее и важнее:'
const answers = ['Наслаждаться\n' +
'каждой минутой \n' +
'проведенного времени', 'Быть устремленными \n' +
'мыслями в будущее', 'Учитывать в ежедневной \n' +
'практике прошлый опыт']
const nextQuestion = '/eleventh-question'
</script>

<style scoped>

</style>
