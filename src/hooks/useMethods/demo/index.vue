<template>
  <div>{{ state.count }}</div>
  <button @click="dispatch.increment()">inc()</button>
  <button @click="dispatch.decrement()">dec()</button>
  <button @click="dispatch.reset()">reset()</button>
</template>

<script setup lang="ts">
import { useMethods } from 'v3-use'

type State = {
  count: number
}

const initialCount = {
  count: 0
}

function reducer(state: State) {
  return {
    increment() {
      return { count: state.count + 1 }
    },
    decrement() {
      return { count: state.count - 1 }
    },
    reset() {
      return { count: 0 }
    }
  }
}

const [state, dispatch] = useMethods(reducer, initialCount)
</script>
