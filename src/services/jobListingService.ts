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
}
