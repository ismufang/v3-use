<template>
  <div>Please open console</div>
  <div>count: {{ count }}</div>
  <div>state: {{ state }}</div>
  <button @click="inc()">incCount</button>
  <button @click="dec()">decCount</button>
  <button @click="incState()">incState</button>
</template>

<script setup lang="ts">
import { useState, useCounter, useEffect } from 'v3-use'
const [count, { dec, inc }] = useCounter(0)
const [state, setState] = useState(0)

const incState = () => {
  setState(c => c + 1)
}

useEffect(() => {
  console.log('mounted')
  return () => {
    console.log('breforeUnmont')
  }
}, [])

useEffect(() => {
  console.log('updated')
  return () => {
    console.log('updated 销毁')
  }
})

useEffect(() => {
  console.log('watch state:', state.value)
  return () => {
    console.log('执行销毁函数')
  }
}, [state])

useEffect(() => {
  console.log('watch count:', count.value)
}, [count])

useEffect(() => {
  console.log('watch count and state:', count.value, state.value)
}, [count, state])
</script>
