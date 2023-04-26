<template>
  <div class="outer-wrapper">
    <div class="progress" :style="{width: `${progress}%`}" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  progress: number
}>()
</script>

<style lang="scss">
.outer-wrapper {
 margin: -15px auto 25px auto;
  width: 260px;
  height: 11px;
  background: #F2F3F3;
  opacity: 0.59;
  border-radius: 10.5px;
  .progress {
    height: 100%;
    background: #3BDE7C;
    border-radius: 10.5px;
  }
}
</style>
