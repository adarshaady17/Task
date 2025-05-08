import express from 'express';
import { listActivities } from '../controller/activity.controller.js';

const router = express.Router();

// Public endpoint
router.route("/").get(listActivities);

export default router;