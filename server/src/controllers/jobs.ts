import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Job, JobStatus } from "../entities/Job";

export async function search(req: Request, res: Response) {
  const jobsRepository = getRepository(Job);
  const { status } = req.query;
  const filter: any = {};
  if (status) filter.status = status;
  const jobs = await jobsRepository.find({
    where: filter,
    order: {
      created: "DESC",
    },
  });
  return res.send(jobs);
}

export async function findById(req: Request, res: Response) {
  return res.send(res.locals.job);
}

export async function patch(req: Request, res: Response) {
  const { job } = res.locals as { job: Job };
  const { status } = req.body as { status: JobStatus };

  if (status) {
    if (job.status === JobStatus.New) {
      if (status !== JobStatus.Accepted && status !== JobStatus.Declined) {
        return res
          .status(400)
          .json({ error: 'This job has a status of "new". It can only be updated to "accepted" or "declined".' });
      }
    }
    if (job.status === JobStatus.Accepted) {
      if (status !== JobStatus.InProgress) {
        return res
          .status(400)
          .json({ error: 'This job has a status of "accepted". It can only be updated to "in-progress".' });
      }
    }
    if (job.status === JobStatus.InProgress) {
      if (status !== JobStatus.Complete) {
        return res
          .status(400)
          .json({ error: 'This job has a status of "in-progress". It can only be updated to "complete".' });
      }
    }
    job.status = status;
  }

  const jobsRepository = getRepository(Job);
  await jobsRepository.save(job);

  return res.send(job);
}
