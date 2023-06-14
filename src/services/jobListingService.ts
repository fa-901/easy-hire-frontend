import type { JobDescription } from '@/models';
import type { AxiosResponse } from 'axios';
import { http } from './api';

export class JobListingService {
    static getJobs(): Promise<AxiosResponse<JobDescription[]>> {
        return http.get('jobs');
    }

    static getJob(id: number): Promise<AxiosResponse<JobDescription>> {
        return http.get(`job/${id}`);
    }

    static createJob(body: JobDescription): Promise<AxiosResponse<JobDescription>> {
        return http.post(`job`, body);
    }

    static updateJob(id: number, body: JobDescription): Promise<AxiosResponse<JobDescription>> {
        return http.put(`job/${id}`, body);
    }

    static uploadResume(id: number, resumes: FileList): Promise<AxiosResponse> {
        const formData = new FormData();
        for (let i = 0; i < resumes.length; i++) {
            formData.append(`resumes`, resumes[i]);
        }

        return http.post(`uploadresume/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static getResume(id: number): Promise<AxiosResponse> {
        return http.get(`sortedresumes/${id}`);
    }
}
