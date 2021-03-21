import express from "express";
import * as jobsController from "../controllers/jobs";
import { attachJob } from "../middleware/attachJob";

const router = express.Router();

router.get("/search", jobsController.search);

router.get("/:jobId", attachJob, jobsController.findById);

router.put("/:jobId", attachJob, jobsController.patch);

export default router;
