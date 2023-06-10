import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false);
    function setLoading(status: boolean) {
        isLoading.value = status;
    }

    return { isLoading, setLoading };
});
