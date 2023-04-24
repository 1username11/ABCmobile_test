<template>
  <image-form :question="question" :url="url" :answers="answers" :enableSVG="false" :nextQuestion="nextQuestion" />
</template>

<script lang="ts" setup>
const question = 'Выберите правильную фигуру из четырёх пронумерованных.'
const url = 'src/assets/staticResource/tests/image.png'
const answers = ['1', '2', '3', '4']
const nextQuestion = '/tenth-question'
</script>

<style scoped>

</style>
