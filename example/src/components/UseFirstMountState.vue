<script lang="ts" setup>
import { useFirstMountState, useEffect } from '../../lib'

const isFirstMount = useFirstMountState()

useEffect(() => {
  if (isFirstMount.value) {
    console.log('breforeMount', isFirstMount.value)
  } else {
    console.log('mounted', isFirstMount.value)
  }
}, [isFirstMount])
</script>

<template>
  <h1>UseFirstMountState</h1>
  <div>{{ isFirstMount }}</div>
</template>
