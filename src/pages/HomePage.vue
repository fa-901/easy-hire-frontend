<script setup lang="ts">
import { data } from '@/models/data';
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
                    <RouterLink v-for="job in data" :key="job.id" :to="{ name: 'detail', params: { id: job.id } }">
                        <tr>
                            <td>{{ job.title }}</td>
                            <td>{{ job.description }}</td>
                        </tr>
                    </RouterLink>
                </tbody>
            </table>
        </div>
    </div>
</template>
