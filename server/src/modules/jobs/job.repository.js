import job from "./job.model.js";
class JobRepository{
    async create(jobData){
        return await job.create(jobData);
    }

    async findAll(){
        return await job.find().sort({createdAt:-1});
    }

    async findById(id){
        return await job.findById(id);
    }
    async deleteById(id){
        return await job.findByIdAndDelete(id);
    }
}

export default new JobRepository();