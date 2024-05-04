import mongoose from 'mongoose';
import { ITour } from '../utils/types';

const tourSchema = new mongoose.Schema<ITour>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 450 },
    image: { type: String, required: true },
    country: { type: String, required: true },
    countryISO: { type: String, required: true },
    city: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    price: { type: Number, min: 0, default: 0 },
    duration: { type: String, required: true },
    highlights: { type: [String] },
    included: { type: [String] },
    excluded: { type: [String] },
    tourType: { type: String, required: true },
    groupSize: { type: Number, required: true, min: 2 },
    languages: { type: [String], required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model<ITour>('Tour', tourSchema);

export default Tour;
