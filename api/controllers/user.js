import User from '../models/User.js';

export const  updateUser = async (req, res, next) => { 
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(201).json(updatedUser)
    } catch (error) {
       next(error)
    }
}

export const delUser  = async (req, res, next) => {   
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json("User has been deleted")
    } catch (error) {
       next(error)
    }
}

export const getUser = async (req, res, next) => {
        
    try {
        const user = await User.findById(req.params.id)
        res.status(201).json(user)
    } catch (error) {
       next(error)
    }
}

export const getAllUser = async (req, res, next) => {
        
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) {
       next(error)
    }
}