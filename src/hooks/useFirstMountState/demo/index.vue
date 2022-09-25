<template>
  <div v-if="isFirst">Only first render wil be show</div>
  <div>state: {{ state }}</div>
  <button @click="setState(c => c + 1)">update</button>
</template>

<script lang="ts" setup>
import { useState, useFirstMountState } from 'v3-use'

const [state, setState] = useState(0)
const isFirst = useFirstMountState()
</script>
