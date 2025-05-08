import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  availableSlots: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Activity', activitySchema);