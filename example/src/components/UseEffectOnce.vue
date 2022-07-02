<script lang='ts' setup>
import { useEffectOnce } from '../../lib';

useEffectOnce(() => {
    console.log('mounted')
    return () => {
        console.log('beforeUnmount')
    }
})
</script>

<template>
<h1>UseEffectOnce</h1>
</template>
