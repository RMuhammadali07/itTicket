const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status.controller");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/status:
 *   post:
 *     tags: [Status]
 *     summary: Create a new status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Status created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/status", statusController.createStatus);

/**
 * @swagger
 * /api/status:
 *   get:
 *     tags: [Status]
 *     summary: Get all status
 *     responses:
 *       '200':
 *         description: List of status
 *       '500':
 *         description: Server error
 */

router.get("/status", statusController.getStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   get:
 *     tags: [Status]
 *     summary: Get status by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Status ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Status details
 *       '404':
 *         description: Status not found
 *       '500':
 *         description: Server Error
 */

router.get("/status/:id", statusController.getStatusById);

/**
 * @swagger
 * /api/status/{id}:
 *   put:
 *     summary: update status
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Status ID
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
 *               status:
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

router.put("/status/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     summery: Delete a status
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: status Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Status not found
 *       '500':
 *         description: Server error
 */

router.delete("/status/:id", statusController.deleteStatus);

module.exports = router;
