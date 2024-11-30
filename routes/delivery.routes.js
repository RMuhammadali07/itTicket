const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/delivery:
 *   post:
 *     tags: [Delivery]
 *     summary: Create a new delivery
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
 *         description: Delivery created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/delivery", deliveryController.createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all delivery
 *     responses:
 *       '200':
 *         description: List of delivery
 *       '500':
 *         description: Server error
 */

router.get("/delivery", deliveryController.getDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   get:
 *     tags: [Delivery]
 *     summary: Get delivery by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Delivery ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Delivery details
 *       '404':
 *         description: Delivery not found
 *       '500':
 *         description: Server Error
 */

router.get("/delivery/:id", deliveryController.getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     summary: update delivery
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Delivery ID
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

router.put("/delivery/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     summery: Delete a delivery
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: delivery Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Delivery not found
 *       '500':
 *         description: Server error
 */

router.delete("/delivery/:id", deliveryController.deleteDelivery);

module.exports = router;
