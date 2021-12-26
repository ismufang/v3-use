<template>
    <hook-layout>
        <template v-slot:title>useBoolean</template>
        <template v-slot:default>
            <div>{{ state }}</div>
            <button @click="toggle()">toggle()</button>
            <button @click="setFalse()">setFalse()</button>
            <button @click="setTrue()">setTrue()</button>
        </template>
    </hook-layout>
</template>

<script setup lang="ts">
import { HookLayout } from '../layouts'
import { useBoolean } from '../../dist/index';

const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>