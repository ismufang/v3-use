<template>
  <div>{{ state }}</div>
  <button @click="inc()">inc()</button>
  <button @click="dec()">dec()</button>
  <button @click="set(3)">set(3)</button>
  <button @click="reset()">reset()</button>
</template>

<script setup lang="ts">
import { useCounter } from 'v3-use'

const [state, { inc, dec, set, reset }] = useCounter(0)
</script>
