<template>
    <div>
        <div class="title">Hooks Test</div>
        <div>
            <UseState />
            <UseToggle />
            <UseBoolean />
            <UseCounter />
            <UseTitle />
            <UseTimeout />
            <UseInterval />
            <UseReducer />
            <UseMethods />
        </div>
        <router-link to="/about">about</router-link>
    </div>
</template>

<script setup lang="ts">
import { 
    UseState, 
    UseToggle, 
    UseBoolean, 
    UseCounter, 
    UseTitle, 
    UseTimeout,
    UseInterval,
    UseReducer,
    UseMethods,
} from '../../components'
</script>

<style scoped lang="scss">
.title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
}
</style>

<style lang="scss">
button {
    margin-right: 5px;
}
</style>