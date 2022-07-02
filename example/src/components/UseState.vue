<script setup lang="ts">
import { useState } from '../../lib/index'

const [state, setState] = useState<number>(1)
</script>

<template>
  <h1>UseState</h1>
  <div>{{ state }}</div>
  <button @click="setState(1)">setState(1)</button>
  <button @click="setState(2)">setState(2)</button>
  <button @click="setState(3)">setState(3)</button>
  <button @click="setState(4)">setState(4)</button>
</template>
