import { Router } from "express";

import {
  getUsersController,
  updateUserStatusController,
  deleteUserController,
  getProfile,
  updateProfile,
} from "../controllers/user.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// =========================
// Logged-in User Profile
// =========================

router.get(
  "/profile",
  authenticate,
  getProfile
);

router.put(
  "/profile",
  authenticate,
  updateProfile
);

// =========================
// Admin User Management
// =========================

router.get(
  "/",
  getUsersController
);

router.put(
  "/:id/status",
  updateUserStatusController
);

router.delete(
  "/:id",
  deleteUserController
);

export default router;