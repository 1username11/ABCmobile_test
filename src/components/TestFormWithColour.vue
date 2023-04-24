<!-- Form.vue -->
<template>
  <Grid :colors="colors1" :question="question" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Grid from './Grid.vue'

const colors1 = ref(['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray'])

const question = 'gvbhjnk'

</script>
