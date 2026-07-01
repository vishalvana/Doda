import { Router } from "express";
import jobRoutes from "../modules/jobs/job.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
  });
});

router.use("/jobs", jobRoutes);

export default router;