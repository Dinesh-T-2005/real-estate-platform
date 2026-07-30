import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  savePropertyController,
  getSavedPropertiesController,
  removeSavedPropertyController,
} from "../controllers/savedProperty.controller";

const router = Router();

router.post(
  "/:propertyId",
  authenticate,
  savePropertyController
);

router.get(
  "/",
  authenticate,
  getSavedPropertiesController
);

router.delete(
  "/:propertyId",
  authenticate,
  removeSavedPropertyController
);

export default router;