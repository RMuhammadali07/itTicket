const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Cart created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/cart", cartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all cart
 *     responses:
 *       '200':
 *         description: List of cart
 *       '500':
 *         description: Server error
 */

router.get("/cart", cartController.getCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Cart ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cart details
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server Error
 */

router.get("/cart/:id", cartController.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: update cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cart ID
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
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshedAt:
 *                 type: string
 *                 format: date
 *               status_id:
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

router.put("/cart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summery: Delete a cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: cart Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */

router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
