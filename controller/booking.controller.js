import Booking from '../model/Booking.model.js';
import Activity from '../model/Activity.model.js';

export const bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    
    // 1. Verify activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }

    // 2. Check available slots
    if (activity.availableSlots <= 0) {
      return res.status(400).json({
        success: false,
        message: 'No available slots'
      });
    }

    // 3. Create booking (use req.user._id from token)
    const booking = await Booking.create({
      user: req.user._id,  // Comes from protect middleware
      activity: activityId
    });

    // 4. Update available slots
    activity.availableSlots -= 1;
    await activity.save();

    res.status(201).json({
      success: true,
      booking
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// booking.controller.js - Fixed getUserBookings
export const getUserBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.user._id }).populate('activity');
      res.status(200).json({
        success: true,
        bookings
      });
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: error.message 
      });
    }
  };