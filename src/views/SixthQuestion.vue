<template>
  <Grid :question="question" :colors="colors" :nextQuestion="nextQuestion" />
</template>

<script lang="ts" setup>
import Grid from '@/components/Grid.vue'
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray']
const question = 'Выберите цвет, который сейчас наиболее Вам приятен:'
const nextQuestion = '/seventh-question'
</script>
