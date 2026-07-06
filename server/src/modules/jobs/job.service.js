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

    async deleteAllJobs() {
    return await jobRepository.deleteAll();
}

    async deleteJob(id) {

        const job = await jobRepository.deleteById(id);

        if (!job) {
            throw new ApiError(404, "Job not found");
        }

        return job;
    }
    async getJobCount() {
    return await jobRepository.count();
}
async bulkCreateJobs(jobs) {

    let inserted = 0;
    let updated = 0;
    let failed = 0;

    for (const job of jobs) {

        try {

            const existingJob = await jobRepository.findBySourceUrl(job.sourceUrl);

            if (existingJob) {

                await jobRepository.update(existingJob._id, {
                    ...job,
                    status: "ACTIVE",
                    lastSeenAt: new Date()
                });

                updated++;

            } else {

                await jobRepository.create({
                    ...job,
                    lastSeenAt: new Date()
                });

                inserted++;

            }

        } catch (error) {

            failed++;

        }

    }

    return {
        inserted,
        updated,
        failed
    };

}

}

export default new JobService();