import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw(error);
  }
}

mongoose.connection.on('disConnected', () => {
    console.log('mongoDB Disconnected');
})

//Middleware
app.use(cors());
app.use(cookieParser())
//In api req u can use every body data
app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((error, req, res, next) => {
  const errStatus = error.status || 500;
  const errMessage = error.message || "Something wen wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: error.stack
  });
})

app.listen(3300, () => {
    connect()
    console.log('Server is running on port 3300. Backend is connected to frontend!')
})