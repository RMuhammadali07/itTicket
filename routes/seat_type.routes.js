 const express = require("express");
 const router = express.Router();
 const seat_typeController = require("../controllers/seat_type.controller");

 /**
  * @swagger
  * tags:
  *   name: Seat_type
  *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
  */

 /**
  * @swagger
  * /api/seat_type:
  *   post:
  *     tags: [Seat_type]
  *     summary: Create a new seat_type
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
  *         description: Seat_type created
  *       '400':
  *         description: Invalid input
  *       '500':
  *         description: Server error
  */

 router.post("/seat_type", seat_typeController.createSeat_type);

 /**
  * @swagger
  * /api/seat_type:
  *   get:
  *     tags: [Seat_type]
  *     summary: Get all seat_type
  *     responses:
  *       '200':
  *         description: List of seat_type
  *       '500':
  *         description: Server error
  */

 router.get("/seat_type", seat_typeController.getSeat_type);

 /**
  * @swagger
  * /api/seat_type/{id}:
  *   get:
  *     tags: [Seat_type]
  *     summary: Get seat_type by id
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         description: Seat_type ID
  *         schema:
  *           type: string
  *     responses:
  *       '200':
  *         description: Seat_type details
  *       '404':
  *         description: Seat_type not found
  *       '500':
  *         description: Server Error
  */

 router.get("/seat_type/:id", seat_typeController.getSeat_typeById);

 /**
  * @swagger
  * /api/seat_type/{id}:
  *   put:
  *     summary: update seat_type
  *     tags: [Seat_type]
  *     parameters:
  *       - in: path
  *         name: id
  *         description: Seat_type ID
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

 router.put("/seat_type/:id", seat_typeController.updateSeat_type);

 /**
  * @swagger
  * /api/seat_type/{id}:
  *   delete:
  *     summery: Delete a seat_type
  *     tags: [Seat_type]
  *     parameters:
  *       - in: path
  *         name: id
  *         description: seat_type Id
  *         required: true
  *         schema:
  *           type: string
  *     responses:
  *       '200':
  *         description: deleted successfully
  *       '404':
  *         description: Seat_type not found
  *       '500':
  *         description: Server error
  */

 router.delete("/seat_type/:id", seat_typeController.deleteSeat_type);

 module.exports = router;
