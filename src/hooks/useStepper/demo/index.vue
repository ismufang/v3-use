<template>
  <div>currentStep: {{ currentStep }}</div>
  <div>isStart: {{ isStart }}</div>
  <div>isEnd: {{ isEnd }}</div>
  <button @click="setCurrentStep(2)">setCurrentStep(2)</button>
  <button @click="toEnd">toEnd</button>
  <button @click="toStart">toStart</button>
  <button @click="toNext">toNext</button>
  <button @click="toPrev">toPrev</button>
  <button @click="reset">reset</button>
</template>

<script lang="ts" setup>
import { useStepper } from 'v3-use'
const {
  currentStep,
  setCurrentStep,
  isEnd,
  isStart,
  toEnd,
  toStart,
  toNext,
  toPrev,
  reset
} = useStepper({
  defaultValue: 1,
  min: 0,
  max: 3
})
</script>
