import { Router } from "express";
import {
  getProperties,
  createProperty,
} from "../controllers/property.controller";

const router = Router();

router.get("/", getProperties);
router.post("/", createProperty);

export default router;