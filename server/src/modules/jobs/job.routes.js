import { Router } from "express";
import jobController from "./job.controller.js";

const router = Router();
router.post("/bulk", jobController.createJobs);

router.post("/", jobController.createJob);

router.get("/", jobController.getAllJobs);

router.get("/count", jobController.getJobCount);


router.get("/:id", jobController.getJobById);

router.delete("/", jobController.deleteAllJobs);

router.delete("/:id", jobController.deleteJob);

export default router;