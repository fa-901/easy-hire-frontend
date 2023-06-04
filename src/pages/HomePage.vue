<script setup lang="ts">
import { data } from '@/models/data';
import router from '@/router';
</script>

<template>
    <div class="card bg-base-100 shadow-xl">
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="cursor-pointer"
                        v-for="job in data"
                        :key="job.id"
                        @click="router.push({ name: 'detail', params: { id: job.id } })"
                    >
                        <td>{{ job.title }}</td>
                        <td>{{ job.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
