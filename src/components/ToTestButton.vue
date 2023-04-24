<template>
  <button class="test-button" @click="router.push('/first-question')">
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
  background: #FFC700;
  border-radius: 20px;
}
</style>
