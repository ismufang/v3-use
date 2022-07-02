<script setup lang="ts">
import { useToggle } from '../../lib/index'

const [state, { toggle, set, setLeft, setRight }] = useToggle('L', 'R')
</script>

<template>
<h1>UseToggle</h1>
  <div>{{ state }}</div>
  <button @click="toggle()">toggle()</button>
  <button @click="set('Left')">set('Left')</button>
  <button @click="set('Right')">set('Right')</button>
  <button @click="setLeft()">setLeft()</button>
  <button @click="setRight()">setRight()</button>
</template>
