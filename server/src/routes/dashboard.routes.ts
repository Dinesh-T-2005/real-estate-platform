import { Router } from "express";
import { dashboardStatsController, monthlyChartController, toggleUserStatusController } from "../controllers/dashboard.controller";

const router = Router();

router.get("/stats", dashboardStatsController);
router.get("/monthly", monthlyChartController);
router.put(
  "/:id/status",
  toggleUserStatusController
);

export default router;