<template>
  <div>
    <div>count: {{ count }}</div>
    <button @click="polling?.run()">run</button>
    <button @click="polling?.destroy()">destroy</button>
    <div>手动轮询</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePolling, useCounter } from 'v3-use'

const { polling, initPolling } = usePolling()
const [count, { inc }] = useCounter()

onMounted(() => {
  initPolling(inc, 2000, { manual: true })
})
</script>
