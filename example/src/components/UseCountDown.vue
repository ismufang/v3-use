<template>
  <hook-layout>
    <template v-slot:title>useCountDown</template>
    <template v-slot:default>
      <div>{{ countdown }}</div>
      <button @click="start(30)">start(30 * 1000)</button>
      <button @click="start(10)">start(10 * 1000)</button>
      <button @click="start()">start()</button>
      <button @click="pause">pause</button>
      <button @click="play">play</button>
      <button @click="stop">stop</button>
    </template>
  </hook-layout>
</template>

<script setup lang="ts">
import { useCountDown } from '../../dist/index'

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
