import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  getMyEnquiries,
} from "../controllers/userEnquiry.controller";

const router = Router();

router.get(
  "/",
  authenticate,
  getMyEnquiries
);

export default router;