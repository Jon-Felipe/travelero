import express from 'express';
const router = express.Router();

import {
  getAllTours,
  getSingleTour,
  createTour,
} from '../controllers/tourController';
import { authenticateUser } from '../middleware/authMiddleware';
import { validateTourInput } from '../middleware/validationMiddleware';

router.get('/', getAllTours);
router.get('/:id', getSingleTour);
router.post('/', validateTourInput, authenticateUser, createTour);

export default router;
