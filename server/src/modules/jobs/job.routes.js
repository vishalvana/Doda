import { Router } from "express";
import jobController from "./job.controller.js";
import validate from "../../middleware/validation.middleware.js";
import { createJobValidator } from "./job.validator.js";

const router = Router();


router.post(
  "/",
  createJobValidator,
  validate,
  jobController.createJob
);

router.post("/bulk", jobController.bulkCreateJobs);


router.get("/", jobController.getAllJobs);

router.get("/count", jobController.getJobCount);

router.get("/:id", jobController.getJobById);


router.delete("/", jobController.deleteAllJobs);

router.delete("/:id", jobController.deleteJob);

export default router;