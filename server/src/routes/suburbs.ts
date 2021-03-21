import express from "express";
import * as suburbsController from "../controllers/suburbs";
import { attachSuburb } from "../middleware/attachSuburb";

const router = express.Router();

router.get("/search", suburbsController.search);

router.get("/:suburbId", attachSuburb, suburbsController.findById);

export default router;
