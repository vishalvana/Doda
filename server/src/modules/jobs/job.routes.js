import { Router } from "express";
import jobController from "./job.controller.js";

const router = Router();

router.post("/", jobController.createJob);

router.get("/", jobController.getAllJobs);

router.get("/:id", jobController.getJobById);

router.delete("/:id", jobController.deleteJob);

export default router;