<script setup lang="ts">
import type { JobDescription } from '@/models';
import { JobListingService } from '@/services/jobListingService';
import { onMounted, reactive, type PropType } from 'vue';

const props = defineProps({
    id: { type: String, required: false },
    formData: { type: Object as PropType<JobDescription>, required: false }
});

const emit = defineEmits<{
    (e: 'cancelEdit'): void;
    (e: 'update', value: JobDescription): void;
}>();

const initialState = {
    id: '',
    title: '',
    description: '',
    responsibilities: [''],
    requirements: ['']
};

const formData: JobDescription = reactive(initialState);

onMounted(() => {
    if (props.formData) {
        Object.assign(formData, props.formData);
    }
});

const onSubmit = () => {
    if (formData.id) {
        JobListingService.updateJob(formData.id as number, formData).then((res) => {
            Object.assign(formData, res.data);
            emit('update', formData);
            emit('cancelEdit');
        });
    } else {
        JobListingService.createJob(formData).then(() => {
            Object.assign(formData, initialState);
        });
    }
};
</script>

<template>
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <div class="flex justify-between">
                <h2 class="card-title">{{ props.formData ? 'Edit' : 'Create' }} Listing</h2>
                <button @click="emit('cancelEdit')" v-if="props.formData" class="btn btn-sm btn-warning btn-outline">
                    Cancel Edit
                </button>
            </div>
            <form @submit.prevent class="flex-col gap-2 max-w-lg">
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Job title</span>
                    </label>
                    <input v-model.trim="formData.title" type="text" class="input input-bordered w-full" />
                </div>
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Job description</span>
                    </label>
                    <textarea v-model.trim="formData.description" type="text" class="textarea textarea-bordered w-full">
                    </textarea>
                </div>
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Requirements</span>
                    </label>
                    <div v-for="(requirement, index) in formData.requirements" :key="index" class="flex gap-3 mb-2">
                        <input
                            v-model.trim="formData.requirements[index]"
                            type="text"
                            placeholder="Add Requirement"
                            class="input input-bordered w-full"
                        />
                        <button class="btn btn-outline btn-error" @click="formData.requirements.splice(index, 1)">
                            ❌
                        </button>
                    </div>
                    <button class="btn btn-accent" @click="formData.requirements.push('')">Add more</button>
                </div>
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Responsibilities</span>
                    </label>
                    <div v-for="(requirement, index) in formData.responsibilities" :key="index" class="flex gap-3 mb-2">
                        <input
                            v-model.trim="formData.responsibilities[index]"
                            type="text"
                            placeholder="Add Responsibility"
                            class="input input-bordered w-full"
                        />
                        <button class="btn btn-outline btn-error" @click="formData.responsibilities.splice(index, 1)">
                            ❌
                        </button>
                    </div>
                    <button class="btn btn-accent" @click="formData.responsibilities.push('')">Add more</button>
                </div>
                <div class="flex flex-row-reverse">
                    <button class="btn btn-primary" @click="onSubmit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>
