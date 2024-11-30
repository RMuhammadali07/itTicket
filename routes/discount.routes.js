const express = require("express");
const router = express.Router();
const discountController = require("../controllers/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/discount:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Discount created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/discount", discountController.createDiscount);

/**
 * @swagger
 * /api/discount:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discount
 *     responses:
 *       '200':
 *         description: List of discount
 *       '500':
 *         description: Server error
 */

router.get("/discount", discountController.getDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get discount by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Discount details
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server Error
 */

router.get("/discount/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     summary: update discount
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Discount ID
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
 *               discount:
 *                 type: string
 *               finish_date:
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

router.put("/discount/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     summery: Delete a discount
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: discount Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server error
 */

router.delete("/discount/:id", discountController.deleteDiscount);

module.exports = router;
