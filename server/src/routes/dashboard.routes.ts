import { Router } from "express";
import { dashboardStatsController } from "../controllers/dashboard.controller";

const router = Router();

router.get("/stats", dashboardStatsController);

export default router;