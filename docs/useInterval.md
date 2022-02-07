# useInterval

一个可以处理 setInterval 的 Hook

## Usage

```vue
<template>
  <button @click="tap()">3s后执行</button>
</template>

<script setup lang="ts">
import { useInterval } from 'v3-use'
import { onMounted } from 'vue'

const tap = () => {
  useInterval(() => {
    console.log('3s后执行')
  }, 3000)
}

onMounted(() => {
  useInterval(
    () => {
      console.log('立即执行一次')
    },
    2000,
    { immediate: true }
  )
})
</script>
```

## Reference

```typescript
function useInterval(
  fn: () => void,
  delay: number,
  options?: { immediate?: boolean }
): void
```
