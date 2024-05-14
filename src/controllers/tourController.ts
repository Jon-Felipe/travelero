import { ParamsDictionary } from 'express-serve-static-core';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

// extras
import Tour from '../models/TourModel';
import { NotFoundError } from '../errors/customErrors';
import { GetAllToursQuery, ITour } from '../utils/types';

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    };
  }
}

// @desc    Get all tours
// @route   GET /api/v1/tours
// @access  Public
async function getAllTours(
  req: Request<ParamsDictionary, {}, {}, GetAllToursQuery>,
  res: Response
) {
  const { sort } = req.query;

  const sortOptions = {
    asc: 'title',
    desc: '-title',
    newest: '-createdAt',
    lowest: 'createdAt',
    priceHighest: '-price',
    priceLowest: 'price',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  const tours = await Tour.find({}).sort(sortKey);
  res.status(200).json({ tours });
}

// @desc    Get single tour
// @route   GET /api/v1/tours/:id
// @access  Public
async function getSingleTour(req: Request<{ id: string }>, res: Response) {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    throw new NotFoundError(`no tour found with id: ${req.params.id}`);
  } else {
    res.status(200).json({ tour });
  }
}

// @desc    Create tour
// @route   POST /api/v1/tours
// @access  Private
async function createTour(
  req: Request<ParamsDictionary, any, Omit<ITour, 'rating'>>,
  res: Response
) {
  req.body.createdBy = new mongoose.Types.ObjectId(req.user.userId);
  const tour = await Tour.create(req.body);
  res.status(201).json({ tour });
}

// @desc    Update tour
// @route   PATCH /api/v1/tours/:id
// @access  Private
async function updateTour(req: Request, res: Response) {
  res.send('update tour');
}

export { getAllTours, getSingleTour, createTour, updateTour };
