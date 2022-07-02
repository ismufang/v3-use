<script setup lang="ts">
import { useInterval } from '../../lib'
// import { onMounted } from 'vue'

const tap = () => {
  useInterval(() => {
    console.log('3s后执行')
  }, 3000)
}

// onMounted(() => {
//     useInterval(() => {
//         console.log('立即执行一次')
//     }, 2000, { immediate: true })
// })
</script>

<template>
  <h1>UseInterval</h1>
  <button @click="tap">3s后执行</button>
</template>
