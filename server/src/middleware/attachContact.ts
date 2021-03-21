import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { Contact } from "../entities/Contact";

export interface ContactNotFoundResponse {
  type: "contact-not-found";
}

function contactNotFoundResponse(): ContactNotFoundResponse {
  return { type: "contact-not-found" };
}

export async function attachContact(req: Request, res: Response, next: NextFunction) {
  await check("contactId", "suburbId is not valid").isLength({ min: 1 }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { contactId } = req.params;
  const contact = await getRepository(Contact).findOne({ id: contactId });

  if (!contact) {
    return res.status(404).json(contactNotFoundResponse());
  }

  res.locals.contact = contact;

  next();
}
