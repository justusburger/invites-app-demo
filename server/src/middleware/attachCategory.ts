import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export interface CategoryNotFoundResponse {
  type: "category-not-found";
}

function categoryNotFoundResponse(): CategoryNotFoundResponse {
  return { type: "category-not-found" };
}

export async function attachCategory(req: Request, res: Response, next: NextFunction) {
  await check("categoryId", "Category is not valid").isLength({ min: 1 }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { categoryId } = req.params;
  const category = await getRepository(Category).findOne({ id: categoryId });

  if (!category) {
    return res.status(404).json(categoryNotFoundResponse());
  }

  res.locals.category = category;

  next();
}
