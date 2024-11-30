const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/event:
 *   post:
 *     tags: [Event]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: date
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: Event created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/event", eventController.createEvent);

/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Get all event
 *     responses:
 *       '200':
 *         description: List of event
 *       '500':
 *         description: Server error
 */

router.get("/event", eventController.getEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get event by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Event ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event details
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server Error
 */

router.get("/event/:id", eventController.getEventById);

/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     summary: update event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Event ID
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
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: date
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
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

router.put("/event/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     summery: Delete a event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: event Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */

router.delete("/event/:id", eventController.deleteEvent);

module.exports = router;
