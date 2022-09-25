<template>
  <div>props.name: {{ props.name }}</div>
  <div>{{ state }}</div>
  <button @click="setState(c => c + 1)">update state</button>
</template>

<script lang="ts" setup>
import { useLogger, useState } from 'v3-use'

const props = defineProps({
  name: {
    type: String,
    default: 'test'
  },
  intro: {
    type: String,
    default: 'this is intro'
  }
})

const [state, setState] = useState(1)
useLogger('Demo1', props)
</script>
