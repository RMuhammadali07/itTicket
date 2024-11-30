const express = require("express");
const router = express.Router();
const customer_addressController = require("../controllers/customer_address.controller");

/**
 * @swagger
 * tags:
 *   name: Customer_address
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer_address:
 *   post:
 *     tags: [Customer_address]
 *     summary: Create a new customer_address
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Customer_address created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/customer_address", customer_addressController.createCustomer_address);

/**
 * @swagger
 * /api/customer_address:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get all customer_address
 *     responses:
 *       '200':
 *         description: List of customer_address
 *       '500':
 *         description: Server error
 */

router.get("/customer_address", customer_addressController.getCustomer_address);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get customer_address by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer_address ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Customer_address details
 *       '404':
 *         description: Customer_address not found
 *       '500':
 *         description: Server Error
 */

router.get("/customer_address/:id", customer_addressController.getCustomer_addressById);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   put:
 *     summary: update customer_address
 *     tags: [Customer_address]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer_address ID
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
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

router.put("/customer_address/:id", customer_addressController.updateCustomer_address);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     summery: Delete a customer_address
 *     tags: [Customer_address]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: customer_address Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Customer_address not found
 *       '500':
 *         description: Server error
 */

router.delete("/customer_address/:id", customer_addressController.deleteCustomer_address);

module.exports = router;
