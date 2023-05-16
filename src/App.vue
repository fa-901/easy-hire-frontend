<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppLayout from './components/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <template #default>
      <RouterView />
    </template>
  </AppLayout>
</template>

<style scoped lang="scss"></style>
