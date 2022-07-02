<script setup lang="ts">
import { useCountDown } from '../../lib/index'

const [countdown, { start, pause, play, stop }] = useCountDown({
  onEnd: () => {
    console.log('End of the time')
  },
  //   format (left) {
  //     return Math.floor(left / 1)
  //   },
  interval: 500,
  step: 1,
})
</script>

<template>
  <h1>UseCountDown</h1>
  <div>{{ countdown }}</div>
  <button @click="start(30)">start(30 * 1000)</button>
  <button @click="start(10)">start(10 * 1000)</button>
  <button @click="start()">start()</button>
  <button @click="pause">pause</button>
  <button @click="play">play</button>
  <button @click="stop">stop</button>
</template>
