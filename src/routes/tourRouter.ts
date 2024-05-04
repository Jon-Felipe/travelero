import express from 'express';
const router = express.Router();

import {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
} from '../controllers/tourController';
import { authenticateUser } from '../middleware/authMiddleware';
import { validateTourInput } from '../middleware/validationMiddleware';

router.get('/', getAllTours);
router.post('/', validateTourInput, authenticateUser, createTour);
router.route('/:id').get(getSingleTour).patch(authenticateUser, updateTour);

export default router;
