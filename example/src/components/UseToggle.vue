<template>
    <hook-layout>
        <template v-slot:title>useToggle</template>
        <template v-slot:default>
            <div>{{ state }}</div>
            <button @click="toggle()">toggle()</button>
            <button @click="set('Left')">set('Left')</button>
            <button @click="set('Right')">set('Right')</button>
            <button @click="setLeft()">setLeft()</button>
            <button @click="setRight()">setRight()</button>
        </template>
    </hook-layout>
</template>

<script setup lang="ts">
import { HookLayout } from '../layouts'
import { useToggle } from '../../dist/index';

const [state, { toggle, set, setLeft, setRight }] = useToggle('L', 'R')
</script>