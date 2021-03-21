import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { Suburb } from "../entities/Suburb";

export interface SuburbNotFoundResponse {
  type: "suburb-not-found";
}

function suburbNotFoundResponse(): SuburbNotFoundResponse {
  return { type: "suburb-not-found" };
}

export async function attachSuburb(req: Request, res: Response, next: NextFunction) {
  await check("suburbId", "suburbId is not valid").isLength({ min: 1 }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { suburbId } = req.params;
  const suburb = await getRepository(Suburb).findOne({ id: suburbId });

  if (!suburb) {
    return res.status(404).json(suburbNotFoundResponse());
  }

  res.locals.suburb = suburb;

  next();
}
