import express from "express";
import * as categoriesController from "../controllers/categories";
import { attachCategory } from "../middleware/attachCategory";

const router = express.Router();

router.get("/search", categoriesController.search);

router.get("/:categoryId", attachCategory, categoriesController.findById);

export default router;
