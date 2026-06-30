import jobRepository from "./job.repository";
import ApiError from "../../utils/ApiError";

class jobService{
    async createJob(jobData){
        return await jobRepository.create(jobData);
    }

    async getAllJobs(){
        return await jobRepository.findAll();
    }

    async getJobById(id){
        const job = await jobRepository.findById(id);
        if(!job){
            throw new ApiError(404,"Job not found");
        }
        return job;
    }

    async deleteJobById(id){
        const job = await jobRepository.deleteById(id);
        if(!job){
            throw new ApiError(404,"Job not found");
        }
        return job;
    
    }

}

export default new jobService();