import Activity from './model/Activity.model.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const activities = [
  {
    title: 'Cricket Match',
    description: 'Weekend cricket tournament',
    location: 'Central Park',
    dateTime: new Date('2023-12-15T14:00:00'),
    availableSlots: 20
  },
  {
    title: 'Movie Night',
    description: 'Outdoor movie screening',
    location: 'City Square Mall',
    dateTime: new Date('2023-12-16T19:00:00'),
    availableSlots: 50
  }
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Activity.deleteMany();
  await Activity.insertMany(activities);
  console.log('Database seeded!');
  process.exit();
};

seedDB();