const express = require("express");
const router = express.Router();
const event_typeController = require("../controllers/event_type.controller");

/**
 * @swagger
 * tags:
 *   name: Event_type
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/event_type:
 *   post:
 *     tags: [Event_type]
 *     summary: Create a new event_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Event_type created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/event_type", event_typeController.createEvent_type);

/**
 * @swagger
 * /api/event_type:
 *   get:
 *     tags: [Event_type]
 *     summary: Get all event_type
 *     responses:
 *       '200':
 *         description: List of event_type
 *       '500':
 *         description: Server error
 */

router.get("/event_type", event_typeController.getEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *   get:
 *     tags: [Event_type]
 *     summary: Get event_type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Event_type ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event_type details
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server Error
 */

router.get("/event_type/:id", event_typeController.getEvent_typeById);

/**
 * @swagger
 * /api/event_type/{id}:
 *   put:
 *     summary: update event_type
 *     tags: [Event_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Event_type ID
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
 *               parent_event_type_id:
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

router.put("/event_type/:id", event_typeController.updateEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *   delete:
 *     summery: Delete a event_type
 *     tags: [Event_type]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: event_type Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server error
 */

router.delete("/event_type/:id", event_typeController.deleteEvent_type);

module.exports = router;
