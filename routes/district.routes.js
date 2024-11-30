const express = require("express");
const router = express.Router();
const districtController = require("../controllers/district.controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/district:
 *   post:
 *     tags: [District]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: District created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/district", districtController.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Get all district
 *     responses:
 *       '200':
 *         description: List of district
 *       '500':
 *         description: Server error
 */

router.get("/district", districtController.getDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get district by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: District ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: District details
 *       '404':
 *         description: District not found
 *       '500':
 *         description: Server Error
 */

router.get("/district/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     summary: update district
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: District ID
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
 *               region_id:
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

router.put("/district/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     summery: Delete a district
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: district Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: District not found
 *       '500':
 *         description: Server error
 */

router.delete("/district/:id", districtController.deleteDistrict);

module.exports = router;
