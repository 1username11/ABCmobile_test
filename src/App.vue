<template>
  <div class="app-wrapper">
    <NavBar />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss">
.app-wrapper{
  align-items: center;
  text-align: center;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
}
</style>
