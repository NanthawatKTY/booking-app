import express from 'express';
import { createHotel, delHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';


const router = express.Router();

//CREATE
router.post('/', createHotel)

//UPDATE
router.put('/:id', updateHotel)

//DELETE
router.delete('/:id', delHotel)

//GET
router.get('/:id', getHotel)

//GET ALL
router.get('/', getAllHotel)


export default router;