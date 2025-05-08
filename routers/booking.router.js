import express from 'express';
import { bookActivity, getUserBookings } from '../controller/booking.controller.js';
import {protect} from '../middlewares/auth.js';

const router = express.Router();

// Protected routes
router.route('/').post(protect, bookActivity);
router.route('/my-bookings').get(protect, getUserBookings);

export default router;