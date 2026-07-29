import { Router } from "express";
import {
  getProperties,
  createProperty,
   deleteProperty,
  getPropertyById,
  updateProperty,
} from "../controllers/property.controller";

const router = Router();

router.get("/", getProperties);
router.post("/", createProperty);
router.delete("/:id", deleteProperty);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);

export default router;