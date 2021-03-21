import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export async function search(req: Request, res: Response) {
  const categoryRepository = getRepository(Category);
  const categories = await categoryRepository.find();
  return res.send(categories);
}

export async function findById(req: Request, res: Response) {
  return res.send(res.locals.category);
}
