<script setup lang="ts"></script>

<template>
    <header>
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <RouterLink :to="{ name: 'list' }"
                    ><a class="btn btn-ghost normal-case text-xl">Easy Hire</a></RouterLink
                >
            </div>
            <div class="navbar-end">
                <RouterLink :to="{ name: 'new' }"> <a class="btn">Add new</a></RouterLink>
            </div>
        </div>
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
    @apply self-center container py-5;
}
</style>
