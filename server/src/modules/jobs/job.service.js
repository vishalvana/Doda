import jobRepository from "./job.repository.js";
import ApiError from "../../utils/ApiError.js";

class JobService {

    async createJob(jobData) {
        return await jobRepository.create(jobData);
    }

    async createJobs(jobs) {

        if (!Array.isArray(jobs) || jobs.length === 0) {
            throw new ApiError(400, "Jobs array is required");
        }

        return await jobRepository.createMany(jobs);
    }

    async getAllJobs() {
        return await jobRepository.findAll();
    }

    async getJobById(id) {

        const job = await jobRepository.findById(id);

        if (!job) {
            throw new ApiError(404, "Job not found");
        }

        return job;
    }

    async deleteJob(id) {

        const job = await jobRepository.deleteById(id);

        if (!job) {
            throw new ApiError(404, "Job not found");
        }

        return job;
    }

}

export default new JobService();