import { Router } from "express";
import {
  generatePropertyDescriptionController,
  chatController,
} from "../controllers/ai.controller";

const router = Router();

/**
 * @swagger
 * /ai/property-description:
 *   post:
 *     summary: Generate AI Property Description
 *     tags:
 *       - AI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Luxury Villa
 *               city:
 *                 type: string
 *                 example: Chennai
 *               price:
 *                 type: string
 *                 example: 2.5 Crore
 *               bedrooms:
 *                 type: integer
 *                 example: 4
 *               bathrooms:
 *                 type: integer
 *                 example: 4
 *               area:
 *                 type: string
 *                 example: 3200 Sq.ft
 *     responses:
 *       200:
 *         description: Property description generated successfully
 */
router.post(
  "/property-description",
  generatePropertyDescriptionController
);

/**
 * @swagger
 * /ai/chat:
 *   post:
 *     summary: AI Chat Assistant
 *     tags:
 *       - AI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Suggest a luxury villa in Chennai
 *     responses:
 *       200:
 *         description: AI response generated successfully
 */
router.post("/chat", chatController);

export default router;