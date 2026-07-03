import jobService from "./job.service.js";
import ApiResponse from "../../utils/ApiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

class JobController {
  createJob = asyncHandler(async (req, res) => {
    const job = await jobService.createJob(req.body);

    res.status(201).json(
      new ApiResponse(201, "Job created successfully", job)
    );
  });
  
createJobs = asyncHandler(async (req, res) => {

    const jobs = await jobService.createJobs(req.body);

    res.status(201).json(
        new ApiResponse(
            201,
            `${jobs.length} jobs inserted successfully`,
            jobs
        )
    );

});
  

  getAllJobs = asyncHandler(async (req, res) => {
    const jobs = await jobService.getAllJobs();

    res.status(200).json(
      new ApiResponse(200, "Jobs fetched successfully", jobs)
    );
  });

  getJobById = asyncHandler(async (req, res) => {
    const job = await jobService.getJobById(req.params.id);

    res.status(200).json(
      new ApiResponse(200, "Job fetched successfully", job)
    );
  });

  deleteJob = asyncHandler(async (req, res) => {
    await jobService.deleteJob(req.params.id);

    res.status(200).json(
      new ApiResponse(200, "Job deleted successfully")
    );
  });
}

export default new JobController();