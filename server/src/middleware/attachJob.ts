import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { Job } from "../entities/Job";

export interface JobNotFoundResponse {
  type: "job-not-found";
}

function jobNotFoundResponse(): JobNotFoundResponse {
  return { type: "job-not-found" };
}

export async function attachJob(req: Request, res: Response, next: NextFunction) {
  await check("jobId", "Job is not valid").isLength({ min: 1 }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { jobId } = req.params;
  const job = await getRepository(Job).findOne({ id: jobId });

  if (!job) {
    return res.status(404).json(jobNotFoundResponse());
  }

  res.locals.job = job;

  next();
}
