<template>
  <hook-layout>
    <template v-slot:title>useState</template>
    <template v-slot:default>
      <div>{{ state }}</div>
      <button @click="setState(1)">setState(1)</button>
      <button @click="setState(2)">setState(2)</button>
      <button @click="setState(3)">setState(3)</button>
      <button @click="setState(4)">setState(4)</button>
    </template>
  </hook-layout>
</template>

<script setup lang="ts">
import { useState } from '../../dist/index'

const [state, setState] = useState<number>(1)
</script>
