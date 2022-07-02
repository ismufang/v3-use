<script lang='ts' setup>
import { useLogger, useCounter } from '../../lib/index'

useLogger('UseLogger Component')

const [state, { inc, dec }] = useCounter(1)
</script>

<template>
<h1>useLogger</h1>
{{ state }}
<button @click="inc()">inc</button>
<button @click="dec()">dec</button>
</template>
