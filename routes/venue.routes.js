const express = require("express");
const router = express.Router();
const venueController = require("../controllers/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/venue:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Venue created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/venue", venueController.createVenue);

/**
 * @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venue
 *     responses:
 *       '200':
 *         description: List of venue
 *       '500':
 *         description: Server error
 */

router.get("/venue", venueController.getVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get venue by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Venue ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Venue details
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server Error
 */

router.get("/venue/:id", venueController.getVenueById);

/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     summary: update venue
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue ID
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
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

router.put("/venue/:id", venueController.updateVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     summery: Delete a venue
 *     tags: [Venue]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: venue Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Venue not found
 *       '500':
 *         description: Server error
 */

router.delete("/venue/:id", venueController.deleteVenue);

module.exports = router;
