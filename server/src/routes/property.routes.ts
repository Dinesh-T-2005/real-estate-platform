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

/**
 * @swagger
 * /properties:
 *   get:
 *     summary: Get All Properties
 *     tags:
 *       - Properties
 *     responses:
 *       200:
 *         description: Property list fetched successfully
 */
router.get("/", getProperties);

/**
 * @swagger
 * /properties/search:
 *   get:
 *     summary: Search Properties
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: integer
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Search completed successfully
 */
router.get("/search", searchPropertiesController);

/**
 * @swagger
 * /properties:
 *   post:
 *     summary: Create Property
 *     tags:
 *       - Properties
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
 *                 type: number
 *                 example: 25000000
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
 *       201:
 *         description: Property created successfully
 */
router.post("/", createProperty);

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Get Property By Id
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property fetched successfully
 */
router.get("/:id", getPropertyById);

/**
 * @swagger
 * /properties/{id}:
 *   put:
 *     summary: Update Property
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Property updated successfully
 */
router.put("/:id", updateProperty);

/**
 * @swagger
 * /properties/{id}:
 *   delete:
 *     summary: Delete Property
 *     tags:
 *       - Properties
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property deleted successfully
 */
router.delete("/:id", deleteProperty);

export default router;