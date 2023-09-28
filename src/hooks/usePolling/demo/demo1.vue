<template>
  <div>
    <div>count: {{ count }}</div>
    <div>自动轮询</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePolling, useCounter } from 'v3-use'

const { initPolling } = usePolling()
const [count, { inc }] = useCounter()

onMounted(() => {
  initPolling(inc, 2000, { immediate: true })
})
</script>
