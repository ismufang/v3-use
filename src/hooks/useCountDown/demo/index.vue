<template>
  <div>{{ timeLeft }}</div>
  <button @click="start(30)">start(30)</button>
  <button @click="start(10)">start(10)</button>
  <button @click="start()">start</button>
  <button @click="pause()">pause</button>
  <button @click="play()">play</button>
  <button @click="stop()">stop</button>
</template>

<script setup lang="ts">
import { useCountDown } from 'v3-use'

const [timeLeft, { start, pause, play, stop }] = useCountDown({
  onEnd: () => {
    console.log('End of the countdown')
  },
  interval: 1000,
  step: 1,
  format: c => `countdown: ${c}`
})
</script>
