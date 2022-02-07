# useTimeout

一个可以处理 setTimeout 的 Hook

## Usage

```vue
<template>
  <button @click="tap()">3s后执行</button>
</template>

<script setup lang="ts">
import { useTimeout } from 'v3-use'

const tap = () => {
  useTimeout(() => {
    console.log('3s后执行')
  }, 3000)
}
</script>
```

## Reference

```typescript
function useTimeout(fn: () => void, delay: number): void
```
