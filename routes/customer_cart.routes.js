const express = require("express");
const router = express.Router();
const customer_cartController = require("../controllers/customer_cart.controller");

/**
 * @swagger
 * tags:
 *   name: Customer_cart
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer_cart:
 *   post:
 *     tags: [Customer_cart]
 *     summary: Create a new customer_cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Customer_cart created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/customer_cart", customer_cartController.createCustomer_cart);

/**
 * @swagger
 * /api/customer_cart:
 *   get:
 *     tags: [Customer_cart]
 *     summary: Get all customer_cart
 *     responses:
 *       '200':
 *         description: List of customer_cart
 *       '500':
 *         description: Server error
 */

router.get("/customer_cart", customer_cartController.getCustomer_cart);

/**
 * @swagger
 * /api/customer_cart/{id}:
 *   get:
 *     tags: [Customer_cart]
 *     summary: Get customer_cart by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer_cart ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Customer_cart details
 *       '404':
 *         description: Customer_cart not found
 *       '500':
 *         description: Server Error
 */

router.get("/customer_cart/:id", customer_cartController.getCustomer_cartById);

/**
 * @swagger
 * /api/customer_cart/{id}:
 *   put:
 *     summary: update customer_cart
 *     tags: [Customer_cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer_cart ID
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
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
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

router.put("/customer_cart/:id", customer_cartController.updateCustomer_cart);

/**
 * @swagger
 * /api/customer_cart/{id}:
 *   delete:
 *     summery: Delete a customer_cart
 *     tags: [Customer_cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: customer_cart Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Customer_cart not found
 *       '500':
 *         description: Server error
 */

router.delete("/customer_cart/:id", customer_cartController.deleteCustomer_cart);

module.exports = router;
