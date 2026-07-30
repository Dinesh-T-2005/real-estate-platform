import { Router } from "express";
import { searchPropertiesController } from "../controllers/search.controller";

const router = Router();

router.get("/", searchPropertiesController);

export default router;