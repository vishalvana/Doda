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
        "Bulk upload completed",
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
  deleteAllJobs = asyncHandler(async (req, res) => {
    const result = await jobService.deleteAllJobs();

    res.status(200).json(
        new ApiResponse(
            200,
            `${result.deletedCount} jobs deleted successfully`,
            result
        )
    );
});

getJobCount = asyncHandler(async (req, res) => {

    const count = await jobService.getJobCount();

    res.status(200).json(
        new ApiResponse(
            200,
            "Job count fetched successfully",
            { count }
        )
    );

});



bulkCreateJobs = asyncHandler(async (req, res) => {
console.log(req.body);
    const result = await jobService.bulkCreateJobs(req.body.jobs);

    res.status(201).json(
        new ApiResponse(
            201,
            "Bulk job upload completed",
            result
        )
    );

});
}

export default new JobController();