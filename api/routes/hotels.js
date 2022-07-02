import express from 'express';
import { createHotel, delHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel)

//UPDATE
router.put('/:id', verifyAdmin, updateHotel)

//DELETE
router.delete('/:id', verifyAdmin, delHotel)

//GET
router.get('/:id', getHotel)

//GET ALL
router.get('/', getAllHotel)


export default router;