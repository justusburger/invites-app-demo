import express from "express";
import * as seedController from "../controllers/seed";

const router = express.Router();

router.get("/clear", seedController.clear);
router.get("/insert", seedController.insert);

export default router;
