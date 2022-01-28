<template>
  <hook-layout>
    <template v-slot:title>useReducer</template>
    <template v-slot:default>
      <div>{{ state.count }}</div>
      <button @click="dispatch({ type: 'increment' })">inc</button>
      <button @click="dispatch({ type: 'decrement' })">dec</button>
      <button @click="dispatch({ type: 'reset', payload: { count: 100 } })">
        reset
      </button>
    </template>
  </hook-layout>
</template>

<script setup lang="ts">
import { useReducer } from '../../dist/index'

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

function init (state: any) {
  return { count: state.count }
}

function reducer (state: State, action: Action) {
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
