<script setup lang="ts">
import ListingForm from '@/components/ListingForm.vue';
import ResumeUpload from '@/components/ResumeUpload.vue';
import type { JobDescription } from '@/models';
import { JobListingService } from '@/services/jobListingService';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const editMode = ref(false);
const resumes: Ref<any[]> = ref([]);
const detail: Ref<JobDescription | undefined> = ref();

const loading = ref(false);

const getResumes = () => {
    loading.value = true;
    JobListingService.getResume(Number(route.params.id))
        .then((response) => {
            resumes.value = response.data;
        })
        .finally(() => {
            loading.value = false;
        });
};

onMounted(() => {
    loading.value = true;
    JobListingService.getJob(Number(route.params.id)).then((response) => {
        detail.value = response.data;
    });

    getResumes();
});
</script>
<template>
    <div class="flex gap-3">
        <div class="flex-shrink-0 card bg-base-100 shadow-xl w-1/2">
            <div class="card-body">
                <template v-if="!editMode">
                    <div class="border-b py-3 flex justify-between">
                        <div>
                            <b>Title:</b>
                            <div>
                                {{ detail?.title }}
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-primary btn-sm" @click="editMode = true">Edit</button>
                        </div>
                    </div>
                    <div class="border-b py-3">
                        <b>Description:</b>
                        <div>
                            {{ detail?.description }}
                        </div>
                    </div>
                    <div class="border-b py-3">
                        <b>Responsibilities:</b>
                        <ul class="list-disc" v-for="x of detail?.responsibilities" :key="x">
                            <li>{{ x }}</li>
                        </ul>
                    </div>
                    <div class="border-b py-3">
                        <b>Requirements:</b>
                        <ul class="list-disc" v-for="x of detail?.requirements" :key="x">
                            <li>{{ x }}</li>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <ListingForm
                        :formData="detail"
                        @cancelEdit="editMode = false"
                        @update="
                            (data) => {
                                detail = data;
                            }
                        "
                    />
                </template>
            </div>
        </div>
        <div class="flex-shrink-0 card bg-base-100 shadow-xl w-1/2">
            <div class="card-body">
                <div class="flex justify-between">
                    <ResumeUpload :id="Number(route.params.id)" />
                    <span class="loading loading-dots loading-sm" v-if="loading"></span>
                    <button class="btn text-3xl" @click="getResumes">🔄️</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="cursor-pointer" v-for="r in resumes" :key="r.sort_order">
                            <th>{{ r.sort_order }}</th>
                            <td>{{ r.name }}</td>
                            <td>{{ r.email }}</td>
                            <td>
                                <a
                                    class="btn btn-link"
                                    :href="`http://127.0.0.1:8000/${r.url}`"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Download Resume
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
