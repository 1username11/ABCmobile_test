<template>
  <button class="test-button" @click="router.push('/start-test')">
    ПРОЙТИ ТЕСТ
  </button>
</template>

<script lang="ts" setup>
import { router } from '@/router/router'
</script>

<style lang="scss">
.test-button{
  margin-top: 20px;
  width: 189px;
  height: 41px;
  border-radius: 20px;
}
</style>
