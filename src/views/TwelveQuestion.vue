<template>
  <ImageForm :question="question" :url="url" :enableSVG="true" :answers="answers" :nextQuestion="nextQuestion" />
</template>

<script lang="ts" setup>
const question = 'Вставьте подходящее число'
const url = 'src/assets/staticResource/tests/image3.png'
const answers = ['34', '36', '53', '44', '66', '42']
const nextQuestion = '/final'
</script>
