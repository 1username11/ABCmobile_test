<template>
  <TestForm :question="question" :answers="answers" :nextQuestion="nextQuestion" :imageUrl="url" />
</template>

<script lang="ts"  setup>
const question = 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:'
const answers = ['Оно остроконечное', 'Оно устойчиво', 'Оно-находится в состоянии равновесия']
const nextQuestion = '/twelve-question'
const url = 'src/assets/staticResource/tests/image2.png'
</script>

<style scoped>

</style>
