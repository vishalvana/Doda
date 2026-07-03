import Job from "./job.model.js";

class JobRepository {

    async create(jobData) {
        return await Job.create(jobData);
    }

    async createMany(jobs) {
        return await Job.insertMany(jobs, {
            ordered: false
        });
    }

    async findAll() {
        return await Job.find().sort({ createdAt: -1 });
    }

    async findById(id) {
        return await Job.findById(id);
    }

    async deleteById(id) {
        return await Job.findByIdAndDelete(id);
    }

}

export default new JobRepository();