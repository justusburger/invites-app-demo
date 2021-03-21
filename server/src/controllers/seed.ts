import { NextFunction, Request, Response } from "express";
import clearSeed from "../seed/clear";
import insertSeed from "../seed/insert";
import { getConnection } from "typeorm";

export async function clear(req: Request, res: Response, next: NextFunction) {
  try {
    await clearSeed(await getConnection());
    return res.json({});
  } catch (err) {
    return next(err);
  }
}

export async function insert(req: Request, res: Response, next: NextFunction) {
  try {
    await insertSeed(await getConnection());
    return res.json({});
  } catch (err) {
    return next(err);
  }
}
