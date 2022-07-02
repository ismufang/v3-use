<script setup lang="ts">
import { useCounter, useEffect } from '../../lib/index'
import { ref } from 'vue'
const [count, { dec, inc }] = useCounter(0)
const state = ref(0)

const incState = () => {
  state.value = state.value + 1
}

// https://github.com/vuejs/core/issues/4686
// beforeUpdate/updated not triggered on component when slot content in child component changes #4686
// onUpdated(() => {
//     console.log('onUpdated')
// })

// useEffect(() => {
//     console.log('vm update', state.value)
//     return () => {
//         console.log('销毁')
//     }
// })

useEffect(() => {
  // console.log(count.value)
  console.log(1119999)
})

// useEffect(() => {
//   console.log('watch state', state.value)
//   return () => {
//     console.log('执行销毁函数')
//   }
// }, [state])

// useEffect(() => {
//   console.log('watch count', state.value)
// }, [count])
</script>

<template>
  <h1>UseEffect</h1>
  <div>{{ count }} - {{ state }}</div>
  <button @click="inc()">inc()</button>
  <button @click="dec()">dec()</button>
  <button @click="incState">incState</button>
</template>
