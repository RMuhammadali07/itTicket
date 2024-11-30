const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country.controller");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     tags: [Country]
 *     summary: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Country created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/country", countryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all country
 *     responses:
 *       '200':
 *         description: List of country
 *       '500':
 *         description: Server error
 */

router.get("/country", countryController.getCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get country by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Country ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Country details
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server Error
 */

router.get("/country/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     summary: update country
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Country ID
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
 *               country:
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

router.put("/country/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     summery: Delete a country
 *     tags: [Country]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: country Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server error
 */

router.delete("/country/:id", countryController.deleteCountry);

module.exports = router;
