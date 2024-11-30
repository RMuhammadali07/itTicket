const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/region:
 *   post:
 *     tags: [Region]
 *     summary: Create a new region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Region created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/region", regionController.createRegion);

/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all region
 *     responses:
 *       '200':
 *         description: List of region
 *       '500':
 *         description: Server error
 */

router.get("/region", regionController.getRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Region ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Region details
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: Server Error
 */

router.get("/region/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     summary: update region
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Region ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Foydalanuvchi muvaffaqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

router.put("/region/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     summery: Delete a region
 *     tags: [Region]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: region Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Region not found
 *       '500':
 *         description: Server error
 */

router.delete("/region/:id", regionController.deleteRegion);

module.exports = router;
