<script setup lang="ts">
import { useCounter } from '../../lib/index'

const [state, { inc, dec, set, reset }] = useCounter(0)
</script>

<template>
  <h1>UseCounter</h1>
  <div>{{ state }}</div>
  <button @click="inc()">inc()</button>
  <button @click="dec()">dec()</button>
  <button @click="set(3)">set(3)</button>
  <button @click="reset()">reset()</button>
</template>
