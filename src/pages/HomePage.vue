<script setup lang="ts">
import type { JobDescription } from '@/models';
import router from '@/router';
import { JobListingService } from '@/services/jobListingService';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

const data: Ref<JobDescription[]> = ref([]);

onMounted(() => {
    JobListingService.getJobs().then((response) => {
        data.value = response.data;
    });
});
</script>

<template>
    <div class="card bg-base-100 shadow-xl">
        <div class="overflow-x-auto">
            <table class="table">
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
