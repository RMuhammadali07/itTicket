const express = require("express");
const router = express.Router();
const languageController = require("../controllers/language.controller");

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/language:
 *   post:
 *     tags: [Language]
 *     summary: Create a new language
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Language created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/language", languageController.createLanguage);

/**
 * @swagger
 * /api/language:
 *   get:
 *     tags: [Language]
 *     summary: Get all language
 *     responses:
 *       '200':
 *         description: List of language
 *       '500':
 *         description: Server error
 */

router.get("/language", languageController.getLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   get:
 *     tags: [Language]
 *     summary: Get language by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Language ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Language details
 *       '404':
 *         description: Language not found
 *       '500':
 *         description: Server Error
 */

router.get("/language/:id", languageController.getLanguageById);

/**
 * @swagger
 * /api/language/{id}:
 *   put:
 *     summary: update language
 *     tags: [Language]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Language ID
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
 *               language:
 *                 type: string
 *               description:
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

router.put("/language/:id", languageController.updateLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   delete:
 *     summery: Delete a language
 *     tags: [Language]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: language Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Language not found
 *       '500':
 *         description: Server error
 */

router.delete("/language/:id", languageController.deleteLanguage);

module.exports = router;
