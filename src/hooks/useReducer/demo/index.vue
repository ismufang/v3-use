<template>
  <div>{{ state.count }}</div>
  <button @click="dispatch({ type: 'increment' })">inc()</button>
  <button @click="dispatch({ type: 'decrement' })">dec()</button>
  <button @click="dispatch({ type: 'reset', payload: { count: 100 } })">
    reset()
  </button>
</template>

<script setup lang="ts">
import { useReducer } from 'v3-use'

type State = {
  count: number
}

type Action = {
  type: string
  payload?: any
}

const initialCount = {
  count: 0
}

function init(state: State) {
  return { count: state.count }
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const [state, dispatch] = useReducer(reducer, initialCount, init)
</script>
