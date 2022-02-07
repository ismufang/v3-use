# useState

管理 state 的 Hook

## Usage

```vue
<template>
  <div>{{ state }}</div>
  <button @click="setState(1)">setState(1)</button>
  <button @click="setState(2)">setState(2)</button>
  <button @click="setState(3)">setState(3)</button>
  <button @click="setState(4)">setState(4)</button>
</template>

<script setup lang="ts">
import { useState } from 'v3-use'

const [state, setState] = useState<number>(1)
</script>
```

## Reference

```typescript
function useState<T>(
  value?: T | (() => T) | undefined
): [Ref<T>, (value: ValueParam<T>) => void]

type ValueParam<T> = T | ((c: T) => T)
```
