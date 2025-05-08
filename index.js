import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./units/db.js";
import userRoute from "./routers/user.router.js";
import activityRoutes from './routers/activity.router.js';
import bookingRoutes from './routers/booking.router.js';

dotenv.config({});

connectDB();
const PORT=process.env.PORT || 4000;
const app=express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRoute);
app.use('/api/v1/activities', activityRoutes);
app.use('/api/v1/bookings', bookingRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running at post ${PORT}`);
});