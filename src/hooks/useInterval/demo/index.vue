<template>
  <div>Please open console</div>
  <button @click="run(true)">run(immediate)</button>
  <button @click="run()">run(3s后执行)</button>
  <button @click="destroy">destroy</button>
</template>

<script setup lang="ts">
import { useInterval } from 'v3-use'

// 立即执行
// useInterval(() => {
//   console.log('3s后执行')
// }, 3000, { immediate: true })

const { run, destroy } = useInterval(() => {
  console.log('3s后执行')
}, 3000)
</script>
