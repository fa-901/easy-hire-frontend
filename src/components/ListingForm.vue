<script setup lang="ts">
import type { JobDescription } from '@/models';
import { reactive } from 'vue';

const formData: JobDescription = reactive({
    id: '',
    title: '',
    description: '',
    responsibilities: [''],
    requirements: ['']
});

const onSubmit = () => {
    console.log(formData);
};
</script>

<template>
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Create / Edit Listing</h2>
            <form @submit.prevent class="flex-col gap-2 max-w-lg">
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Job title</span>
                    </label>
                    <input v-model="formData.title" type="text" class="input input-bordered w-full" />
                </div>
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Job description</span>
                    </label>
                    <textarea v-model="formData.description" type="text" class="textarea textarea-bordered w-full">
                    </textarea>
                </div>
                <div class="mb-3">
                    <label class="label">
                        <span class="label-text">Requirements</span>
                    </label>
                    <div v-for="(requirement, index) in formData.requirements" :key="index" class="flex gap-3 mb-2">
                        <input
                            v-model="formData.requirements[index]"
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
                            v-model="formData.responsibilities[index]"
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
