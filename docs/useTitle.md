# useTitle

用于设置页面标题

## Usage

```vue
<template>
  <div>{{ title }}</div>
  <button @click="setTitle('t1')">setTitle('t1')</button>
  <button @click="setTitle('t2')">setTitle('t2')</button>
  <button @click="setTitle('t3')">setTitle('t3')</button>
</template>

<script setup lang="ts">
import { useTitle } from 'v3-use'

const [title, setTitle] = useTitle()
</script>
```

## Reference

```ts
function useTitle(
  title?: string | undefined
): [Ref<string>, (value: string | ((c: string) => string)) => void]
```
