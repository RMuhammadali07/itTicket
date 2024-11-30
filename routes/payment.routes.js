const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/payment:
 *   post:
 *     tags: [Payment]
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Payment created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/payment", paymentController.createPayment);

/**
 * @swagger
 * /api/payment:
 *   get:
 *     tags: [Payment]
 *     summary: Get all payment
 *     responses:
 *       '200':
 *         description: List of payment
 *       '500':
 *         description: Server error
 */

router.get("/payment", paymentController.getPayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   get:
 *     tags: [Payment]
 *     summary: Get payment by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Payment ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Payment details
 *       '404':
 *         description: Payment not found
 *       '500':
 *         description: Server Error
 */

router.get("/payment/:id", paymentController.getPaymentById);

/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     summary: update payment
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Payment ID
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

router.put("/payment/:id", paymentController.updatePayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     summery: Delete a payment
 *     tags: [Payment]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: payment Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Payment not found
 *       '500':
 *         description: Server error
 */

router.delete("/payment/:id", paymentController.deletePayment);

module.exports = router;
