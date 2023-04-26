<template>
  <div>
    <h2 class="timer-text">Звоните скорее, запись доступна всего </h2>
    <div class="flex justify-center">
      <div class="timer-green">{{ displayTime }}</div>
      <div class="timer-text">минут</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentTime = ref(600)
const isTimerRunning = ref(false)
const displayTime = ref('10:00')
let timer: NodeJS.Timeout

const startTimer = () => {
  if (!isTimerRunning.value) {
    isTimerRunning.value = true
    timer = setInterval(() => {
      currentTime.value -= 1
      displayTime.value = formatTime(currentTime.value)
      if (currentTime.value <= 0) {
        clearInterval(timer)
        router.push('/next-page')
      }
    }, 1000)
  }
}
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (timeInSeconds % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

onMounted(() => {
  startTimer()
})

</script>

<style scoped>
.timer-text{
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 30px;
    /* identical to box height, or 273% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #3BDE7C;

}
.timer-green {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #3BDE7C;
    margin-right: 8px;
}

</style>
