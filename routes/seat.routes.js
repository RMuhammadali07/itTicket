const express = require("express");
const router = express.Router();
const seatController = require("../controllers/seat.controller");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/seat:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Seat created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/seat", seatController.createSeat);

/**
 * @swagger
 * /api/seat:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seat
 *     responses:
 *       '200':
 *         description: List of seat
 *       '500':
 *         description: Server error
 */

router.get("/seat", seatController.getSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get seat by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Seat ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Seat details
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server Error
 */

router.get("/seat/:id", seatController.getSeatById);

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     summary: update seat
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Seat ID
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
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
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

router.put("/seat/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     summery: Delete a seat
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: seat Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Seat not found
 *       '500':
 *         description: Server error
 */

router.delete("/seat/:id", seatController.deleteSeat);

module.exports = router;
