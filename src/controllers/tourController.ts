import { ParamsDictionary } from 'express-serve-static-core';
import { Request, Response } from 'express';
import Tour, { ITour } from '../models/TourModel';

// @desc    Get all tours
// @route   GET /api/v1/tours
// @access  Public
async function getAllTours(req: Request, res: Response) {
  const tours = await Tour.find({});
  res.status(200).json({ tours });
}

// @desc    Get single tour
// @route   GET /api/v1/tours/:id
// @access  Public
async function getSingleTour(req: Request<{ id: string }>, res: Response) {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    throw new Error('Tour not found');
  } else {
    res.status(200).json({ tour });
  }
}

// @desc    Create tour
// @route   POST /api/v1/tours
// @access  Private
async function createTour(
  req: Request<ParamsDictionary, unknown, ITour>,
  res: Response
) {
  const newTour = req.body;
  delete newTour.rating;

  const tour = await Tour.create(newTour);
  res.status(201).json({ tour });
}

export { getAllTours, getSingleTour, createTour };
