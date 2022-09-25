<template>
  <button @click="run()">3s后执行</button>
  <button @click="destroy()">destroy</button>
  <div>ouput: {{ state }}</div>
</template>

<script setup lang="ts">
import { useTimeout, useState } from 'v3-use'

const [state, setState] = useState(0)
const { run, destroy } = useTimeout(() => {
  setState(c => c + 1)
}, 3000)
</script>
