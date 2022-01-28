<template>
  <hook-layout>
    <template v-slot:title>useCounter</template>
    <template v-slot:default>
      <div>{{ state }}</div>
      <button @click="inc()">inc()</button>
      <button @click="dec()">dec()</button>
      <button @click="set(3)">set(3)</button>
      <button @click="reset()">reset()</button>
    </template>
  </hook-layout>
</template>

<script setup lang="ts">
import { useCounter } from '../../dist/index'

const [state, { inc, dec, set, reset }] = useCounter(0)
</script>
