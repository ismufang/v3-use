<template>
    <hook-layout>
        <template v-slot:title>useTitle</template>
        <template v-slot:default>
            <div>{{ title }}</div>
            <button @click="setTitle('t1')">setTitle('t1')</button>
            <button @click="setTitle('t2')">setTitle('t2')</button>
            <button @click="setTitle('t3')">setTitle('t3')</button>
        </template>
    </hook-layout>
</template>

<script setup lang="ts">
import { HookLayout } from '../layouts'
import { useTitle } from '../../dist/index';

const [title, setTitle] = useTitle()
</script>