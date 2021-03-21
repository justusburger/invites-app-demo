import { Request, Response } from "express";

export async function findById(req: Request, res: Response) {
  return res.send(res.locals.contact);
}
