const express = require("express");
const router = express.Router();
const flatController = require("../controllers/flat.controller");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/flat:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Flat created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/flat", flatController.createFlat);

/**
 * @swagger
 * /api/flat:
 *   get:
 *     tags: [Flat]
 *     summary: Get all flat
 *     responses:
 *       '200':
 *         description: List of flat
 *       '500':
 *         description: Server error
 */

router.get("/flat", flatController.getFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get flat by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Flat ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Flat details
 *       '404':
 *         description: Flat not found
 *       '500':
 *         description: Server Error
 */

router.get("/flat/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flat/{id}:
 *   put:
 *     summary: update flat
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Flat ID
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
 *               etaj:
 *                 type: number
 *               condition:
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

router.put("/flat/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   delete:
 *     summery: Delete a flat
 *     tags: [Flat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: flat Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Flat not found
 *       '500':
 *         description: Server error
 */

router.delete("/flat/:id", flatController.deleteFlat);

module.exports = router;
