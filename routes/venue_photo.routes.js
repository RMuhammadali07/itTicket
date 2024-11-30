const express = require("express");
const router = express.Router();
const venue_photoController = require("../controllers/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: Venue_photo
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/venue_photo:
 *   post:
 *     tags: [Venue_photo]
 *     summary: Create a new venue_photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Venue_photo created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/venue_photo", venue_photoController.createVenue_photo);

/**
 * @swagger
 * /api/venue_photo:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get all venue_photo
 *     responses:
 *       '200':
 *         description: List of venue_photo
 *       '500':
 *         description: Server error
 */

router.get("/venue_photo", venue_photoController.getVenue_photo);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get venue_photo by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Venue_photo ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Venue_photo details
 *       '404':
 *         description: Venue_photo not found
 *       '500':
 *         description: Server Error
 */

router.get("/venue_photo/:id", venue_photoController.getVenue_photoById);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   put:
 *     summary: update venue_photo
 *     tags: [Venue_photo]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue_photo ID
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
 *               venue_id:
 *                 type: number
 *               url:
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

router.put("/venue_photo/:id", venue_photoController.updateVenue_photo);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   delete:
 *     summery: Delete a venue_photo
 *     tags: [Venue_photo]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: venue_photo Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Venue_photo not found
 *       '500':
 *         description: Server error
 */

router.delete("/venue_photo/:id", venue_photoController.deleteVenue_photo);

module.exports = router;
