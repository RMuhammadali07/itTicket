const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/admin", adminController.createAdmin);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admin
 *     responses:
 *       '200':
 *         description: List of admin
 *       '500':
 *         description: Server error
 */

router.get("/admin", adminController.getAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Admin details
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server Error
 */

router.get("/admin/:id", adminController.getAdminById);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: update admin
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Admin ID
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
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
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

router.put("/admin/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summery: Delete a admin
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: admin Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Server error
 */

router.delete("/admin/:id", adminController.deleteAdmin);

module.exports = router;
