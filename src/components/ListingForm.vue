<script setup lang="ts">
import { reactive } from 'vue';

const formData = reactive({
    title: '',
    requirements: []
});

const onSubmit = () => {
    console.log(formData);
};
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Create / Edit Listing</h2>
            <form @submit.prevent class="flex-col gap-2">
                <div class="mb-3">
                    <input
                        v-model="formData.title"
                        type="text"
                        placeholder="Job title"
                        class="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div class="mb-3">
                    <input
                        v-model="formData.title"
                        type="text"
                        placeholder="Add Requirement"
                        class="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div class="mb-3">
                    <input
                        v-model="formData.title"
                        type="text"
                        placeholder="Add Responsibilities"
                        class="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>
