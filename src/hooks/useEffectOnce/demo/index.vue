<template>
  <div>Please open console</div>
</template>

<script lang="ts" setup>
import { useEffectOnce } from 'v3-use'
useEffectOnce(() => {
  console.log('mounted')
  return () => {
    console.log('beforeUnmount')
  }
})
</script>
