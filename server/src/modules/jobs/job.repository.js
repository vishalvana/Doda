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
    async deleteAll() {
    return await Job.deleteMany({});
}

    async createMany(jobs) {
  try {
    const inserted = await Job.insertMany(jobs, {
      ordered: false,
    });

    return {
      inserted: inserted.length,
      duplicates: 0,
      failed: 0,
    };
  } catch (err) {
    if (err.code === 11000 || err.writeErrors) {
      const inserted =
        err.result?.result?.nInserted ??
        err.insertedDocs?.length ??
        0;

      const duplicates =
        err.writeErrors?.filter(
          (e) => e.code === 11000
        ).length ?? 0;

      return {
        inserted,
        duplicates,
        failed: 0,
      };
    }

    throw err;
  }
}

async findBySourceUrl(sourceUrl) {
    return await Job.findOne({ sourceUrl });
}

async update(id, jobData) {
    return await Job.findByIdAndUpdate(
        id,
        jobData,
        {
            new: true
        }
    );
}

async bulkCreate(jobs) {
    return await Job.insertMany(jobs);
}

async count() {
    return await Job.countDocuments();
}

}

export default new JobRepository();