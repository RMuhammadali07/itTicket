const express = require("express");
const router = express.Router();
const venue_typeController = require("../controllers/venue_type.controller");

/**
 * @swagger
 * tags:
 *   name: Venue_type
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/venue_type:
 *   post:
 *     tags: [Venue_type]
 *     summary: Create a new venue_type
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
 *         description: Venue_type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/venue_type", venue_typeController.createVenue_type);

/**
 * @swagger
 * /api/venue_type:
 *   get:
 *     tags: [Venue_type]
 *     summary: Get all venue_type
 *     responses:
 *       '200':
 *         description: List of venue_type
 *       '500':
 *         description: Server error
 */

router.get("/venue_type", venue_typeController.getVenue_type);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   get:
 *     tags: [Venue_type]
 *     summary: Get venue_type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Venue_type ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Venue_type details
 *       '404':
 *         description: Venue_type not found
 *       '500':
 *         description: Server Error
 */

router.get("/venue_type/:id", venue_typeController.getVenue_typeById);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   put:
 *     summary: update venue_type
 *     tags: [Venue_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue_type ID
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

router.put("/venue_type/:id", venue_typeController.updateVenue_type);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   delete:
 *     summery: Delete a venue_type
 *     tags: [Venue_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: venue_type Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Venue_type not found
 *       '500':
 *         description: Server error
 */

router.delete("/venue_type/:id", venue_typeController.deleteVenue_type);

module.exports = router;
