<script setup lang="ts">
import { JobListingService } from '@/services/jobListingService';
import { ref, type Ref } from 'vue';

const props = defineProps({
    id: { type: Number, required: true }
});

const files: Ref<FileList | undefined> = ref();

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    files.value = target.files as FileList;
};

const uploadFiles = () => {
    JobListingService.uploadResume(props.id, files.value as FileList);
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
        <button v-if="files" class="btn btn-primary" @click="uploadFiles">Upload Resumes</button>
    </div>
</template>

<style scoped></style>
