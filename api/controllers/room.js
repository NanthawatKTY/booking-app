import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(201).json(savedRoom);
    } catch (err) {
      next(err);
    }
};

export const  updateRoom = async (req, res, next) => {
        
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(201).json(updatedRoom)
    } catch (error) {
       next(error)
    }
}

export const delRoom  = async (req, res, next) => {
    const hotelId = req.params.hotelid;  
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
              $pull: { rooms: req.params.id },
            });
          } catch (err) {
            next(err);
        }
        res.status(201).json("Room has been deleted")
    } catch (error) {
       next(error)
    }
}

export const getRoom = async (req, res, next) => {
        
    try {
        const room = await Room.findById(req.params.id)
        res.status(201).json(room)
    } catch (error) {
       next(error)
    }
}

export const getAllRooms = async (req, res, next) => {
        
    try {
        const rooms = await Room.find()
        res.status(201).json(rooms)
    } catch (error) {
       next(error)
    }
}