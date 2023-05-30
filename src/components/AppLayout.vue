<script setup lang="ts"></script>

<template>
    <header>
        <div class="title">Easy Hire</div>
    </header>
    <main class="p-4">
        <slot></slot>
    </main>
    <footer></footer>
</template>

<style scoped lang="scss">
header {
    @apply flex py-3 px-5 border-b-2;

    .title {
        @apply text-3xl;
    }
}

main {
    @apply self-center container px-3;
}
</style>
