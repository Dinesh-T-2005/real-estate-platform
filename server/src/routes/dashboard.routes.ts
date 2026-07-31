import { Router } from "express";
import {
  dashboardStatsController,
  monthlyChartController,
  toggleUserStatusController,
} from "../controllers/dashboard.controller";

const router = Router();

/**
 * @swagger
 * /dashboard/stats:
 *   get:
 *     summary: Get Dashboard Statistics
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Dashboard statistics fetched successfully
 */
router.get("/stats", dashboardStatsController);

/**
 * @swagger
 * /dashboard/monthly:
 *   get:
 *     summary: Get Monthly Dashboard Chart
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Monthly chart data fetched successfully
 */
router.get("/monthly", monthlyChartController);

/**
 * @swagger
 * /dashboard/{id}/status:
 *   put:
 *     summary: Block or Unblock User
 *     tags:
 *       - Dashboard
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: User status updated successfully
 */
router.put("/:id/status", toggleUserStatusController);

export default router;