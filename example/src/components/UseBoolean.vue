<script setup lang="ts">
import { useBoolean } from '../../lib'

const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>

<template>
<h1>UseBoolean</h1>
  <div>
    <div>{{ state }}</div>
    <button @click="toggle">toggle()</button>
    <button @click="setFalse">setFalse()</button>
    <button @click="setTrue">setTrue()</button>
  </div>
</template>


