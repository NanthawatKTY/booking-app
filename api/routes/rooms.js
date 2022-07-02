import express from 'express';
import { createRoom, updateRoom, delRoom, getRoom, getAllRooms } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom)

//UPDATE
router.put('/:id', verifyAdmin, updateRoom)

//DELETE
router.delete('/:id/:hotelid', verifyAdmin, delRoom)

//GET
router.get('/:id', getRoom)

//GET ALL
router.get('/', getAllRooms)

export default router;