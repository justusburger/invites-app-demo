import express from "express";
import * as contactsController from "../controllers/contacts";
import { attachContact } from "../middleware/attachContact";

const router = express.Router();

router.get("/:contactId", attachContact, contactsController.findById);

export default router;
