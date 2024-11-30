const express = require("express");
const router = express.Router();
const ticket_typeController = require("../controllers/ticket_type.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket_type
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/ticket_type:
 *   post:
 *     tags: [Ticket_type]
 *     summary: Create a new ticket_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               tickets:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Ticket_type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/ticket_type", ticket_typeController.createTicket_type);

/**
 * @swagger
 * /api/ticket_type:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get all ticket_type
 *     responses:
 *       '200':
 *         description: List of ticket_type
 *       '500':
 *         description: Server error
 */

router.get("/ticket_type", ticket_typeController.getTicket_type);

/**
 * @swagger
 * /api/ticket_type/{id}:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get ticket_type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Ticket_type ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Ticket_type details
 *       '404':
 *         description: Ticket_type not found
 *       '500':
 *         description: Server Error
 */

router.get(
  "/ticket_type/:id",
  ticket_typeController.getTicket_typeById
);

/**
 * @swagger
 * /api/ticket_type/{id}:
 *   put:
 *     summary: update ticket_type
 *     tags: [Ticket_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Ticket_type ID
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
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               tickets:
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

router.put(
  "/ticket_type/:id",
  ticket_typeController.updateTicket_type
);

/**
 * @swagger
 * /api/ticket_type/{id}:
 *   delete:
 *     summery: Delete a ticket_type
 *     tags: [Ticket_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ticket_type Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Ticket_type not found
 *       '500':
 *         description: Server error
 */

router.delete(
  "/ticket_type/:id",
  ticket_typeController.deleteTicket_type
);

module.exports = router;
