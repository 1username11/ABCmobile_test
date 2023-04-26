<template>
  <button
    :class="{ 'disabled': !selectedAnswer }"
    :disabled="!selectedAnswer"
    @click="$emit('nextQuestion')"
  >
    ДАЛЕЕ
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  selectedAnswer: boolean
}>()
defineEmits(['nextQuestion'])
</script>

<style scoped>

button {
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
    border-radius: 20px;
    width: 189px;
    height: 41px;
    margin-top: 35px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #0D0C11;
}

button.disabled {
    background: #DADADA;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 189px;
    height: 41px;

    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #8E8E8E;
}
</style>
