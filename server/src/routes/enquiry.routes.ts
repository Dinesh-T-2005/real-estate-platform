import { Router } from "express";
import {
  createEnquiryController,
  getAllEnquiriesController,
  deleteEnquiryController,
updateEnquiryStatusController,
} from "../controllers/enquiry.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  createEnquiryController
);

router.get(
  "/",
  getAllEnquiriesController
);

router.delete("/:id", deleteEnquiryController);
router.put(
  "/:id/status",
  updateEnquiryStatusController
);

export default router;