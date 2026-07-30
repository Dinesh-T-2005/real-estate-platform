import { Router } from "express";
import {
  getProperties,
  createProperty,
   deleteProperty,
  getPropertyById,
  updateProperty,
} from "../controllers/property.controller";
import { searchPropertiesController } from "../controllers/search.controller";

const router = Router();

router.get("/", getProperties);
router.get("/search", searchPropertiesController);
router.post("/", createProperty);
router.delete("/:id", deleteProperty);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);

export default router;