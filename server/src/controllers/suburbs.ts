import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Suburb } from "../entities/Suburb";

export async function search(req: Request, res: Response) {
  const suburbRepository = getRepository(Suburb);
  const suburbs = await suburbRepository.find();
  return res.send(suburbs);
}

export async function findById(req: Request, res: Response) {
  return res.send(res.locals.suburb);
}
