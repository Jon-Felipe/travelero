import mongoose from 'mongoose';
import { ITour } from '../utils/types';

const tourSchema = new mongoose.Schema<ITour>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 450 },
    price: { type: Number, min: 0, default: 0 },
    location: {
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    ticketType: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    numOfReviews: { type: Number, min: 0, default: 0 },
    included: { type: [String], required: true },
    excluded: { type: [String], required: true },
    image: { type: String, required: true },
    durations: [
      {
        _id: false,
        duration: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    availableLanguages: { type: [String], required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model<ITour>('Tour', tourSchema);

export default Tour;
