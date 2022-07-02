<script lang='ts' setup>
import { useCounter, useUpdateEffect } from '../../lib/index';

const [count, { inc, dec }] = useCounter()
const [count2, { inc: inc2, dec: dec2 }] = useCounter()

useUpdateEffect(() => {
    console.log(count.value)
})

</script>

<template>
<h1>useUpdateEffect</h1>
{{count}}
<button @click="inc()">inc1</button>
<button @click="dec()">dec1</button>
<hr/>
{{count2}}
<button @click="inc2()">inc2</button>
<button @click="dec2()">dec2</button>
</template>
