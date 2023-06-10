import { useLoaderStore } from '@/stores/loader';
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

const setLoading = (status: boolean) => {
    const store = useLoaderStore();
    store.setLoading(status);
};

http.interceptors.request.use(
    function (config) {
        setLoading(true);
        return config;
    },
    function (error) {
        setLoading(false);
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function (response) {
        setLoading(false);
        return response;
    },
    function (error) {
        setLoading(false);
        return Promise.reject(error);
    }
);

export { http };
