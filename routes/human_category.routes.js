const express = require("express");
const router = express.Router();
const human_categoryController = require("../controllers/human_category.controller");

/**
 * @swagger
 * tags:
 *   name: Human_category
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/human_category:
 *   post:
 *     tags: [Human_category]
 *     summary: Create a new human_category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Human_category created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/human_category", human_categoryController.createHuman_category);

/**
 * @swagger
 * /api/human_category:
 *   get:
 *     tags: [Human_category]
 *     summary: Get all human_category
 *     responses:
 *       '200':
 *         description: List of human_category
 *       '500':
 *         description: Server error
 */

router.get("/human_category", human_categoryController.getHuman_category);

/**
 * @swagger
 * /api/human_category/{id}:
 *   get:
 *     tags: [Human_category]
 *     summary: Get human_category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Human_category ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Human_category details
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server Error
 */

router.get("/human_category/:id", human_categoryController.getHuman_categoryById);

/**
 * @swagger
 * /api/human_category/{id}:
 *   put:
 *     summary: update human_category
 *     tags: [Human_category]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Human_category ID
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
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender_id:
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

router.put("/human_category/:id", human_categoryController.updateHuman_category);

/**
 * @swagger
 * /api/human_category/{id}:
 *   delete:
 *     summery: Delete a human_category
 *     tags: [Human_category]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: human_category Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server error
 */

router.delete("/human_category/:id", human_categoryController.deleteHuman_category);

module.exports = router;
