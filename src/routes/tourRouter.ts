import express from 'express';
const router = express.Router();

import {
  getAllTours,
  getSingleTour,
  createTour,
} from '../controllers/tourController';
import { authenticateUser } from '../middleware/authMiddleware';

router.get('/', getAllTours);
router.get('/:id', getSingleTour);
router.post('/', authenticateUser, createTour);

export default router;
