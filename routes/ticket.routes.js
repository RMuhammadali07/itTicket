const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/ticket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: number
 *               ticket_type_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Ticket created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/ticket", ticketController.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all ticket
 *     responses:
 *       '200':
 *         description: List of ticket
 *       '500':
 *         description: Server error
 */

router.get("/ticket", ticketController.getTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get ticket by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Ticket ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Ticket details
 *       '404':
 *         description: Ticket not found
 *       '500':
 *         description: Server Error
 */

router.get("/ticket/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     summary: update ticket
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket ID
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
 *               ticket_type_id:
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

router.put("/ticket/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     summery: Delete a ticket
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ticket Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Ticket not found
 *       '500':
 *         description: Server error
 */

router.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = router;
