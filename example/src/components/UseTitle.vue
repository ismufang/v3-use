<script setup lang="ts">
import { useTitle } from '../../lib/index'

const [title, setTitle] = useTitle()
</script>

<template>
  <h1>UseTitle</h1>
  <div>{{ title }}</div>
  <button @click="setTitle('t1')">setTitle('t1')</button>
  <button @click="setTitle('t2')">setTitle('t2')</button>
  <button @click="setTitle('t3')">setTitle('t3')</button>
</template>
