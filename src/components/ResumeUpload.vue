<script setup lang="ts">
import { JobListingService } from '@/services/jobListingService';
import { ref, type Ref } from 'vue';

const props = defineProps({
    id: { type: Number, required: true }
});

const files: Ref<FileList | undefined> = ref();
const loading = ref(false);

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    files.value = target.files as FileList;
};

const uploadFiles = () => {
    loading.value = true;
    JobListingService.uploadResume(props.id, files.value as FileList).then((res) => {
        loading.value = false;
        console.log(res);
    });
};
</script>
<template>
    <div class="flex gap-8">
        <input
            @change="onFileChange"
            multiple
            accept="application/pdf"
            type="file"
            class="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        <span class="loading loading-dots loading-sm" v-if="loading"></span>
        <button v-if="files" class="btn btn-primary" @click="uploadFiles">Upload Resumes</button>
    </div>
</template>

<style scoped></style>
