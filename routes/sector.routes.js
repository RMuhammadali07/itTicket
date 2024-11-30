const express = require("express");
const router = express.Router();
const sectorController = require("../controllers/sector.controller");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/sector:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Sector created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/sector", sectorController.createSector);

/**
 * @swagger
 * /api/sector:
 *   get:
 *     tags: [Sector]
 *     summary: Get all sector
 *     responses:
 *       '200':
 *         description: List of sector
 *       '500':
 *         description: Server error
 */

router.get("/sector", sectorController.getSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get sector by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Sector ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sector details
 *       '404':
 *         description: Sector not found
 *       '500':
 *         description: Server Error
 */

router.get("/sector/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sector/{id}:
 *   put:
 *     summary: update sector
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Sector ID
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
 *               sector_name:
 *                 type: string
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

router.put("/sector/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   delete:
 *     summery: Delete a sector
 *     tags: [Sector]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: sector Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Sector not found
 *       '500':
 *         description: Server error
 */

router.delete("/sector/:id", sectorController.deleteSector);

module.exports = router;
