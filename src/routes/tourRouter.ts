import express from 'express';
const router = express.Router();

import {
  getAllTours,
  getSingleTour,
  createTour,
} from '../controllers/tourController';

router.get('/', getAllTours);

router.get('/:id', getSingleTour);

router.post('/', createTour);

export default router;
