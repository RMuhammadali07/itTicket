const express = require("express");
const router = express.Router();
const genderController = require("../controllers/gender.controller");

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/gender:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
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
 *         description: Gender created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/gender", genderController.createGender);

/**
 * @swagger
 * /api/gender:
 *   get:
 *     tags: [Gender]
 *     summary: Get all gender
 *     responses:
 *       '200':
 *         description: List of gender
 *       '500':
 *         description: Server error
 */

router.get("/gender", genderController.getGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get gender by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gender ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Gender details
 *       '404':
 *         description: Gender not found
 *       '500':
 *         description: Server Error
 */

router.get("/gender/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/gender/{id}:
 *   put:
 *     summary: update gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Gender ID
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

router.put("/gender/:id", genderController.updateGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   delete:
 *     summery: Delete a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: gender Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Gender not found
 *       '500':
 *         description: Server error
 */

router.delete("/gender/:id", genderController.deleteGender);

module.exports = router;
