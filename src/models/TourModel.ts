import mongoose from 'mongoose';

interface ITour {
  title: string;
  image: string;
  country: string;
  countryISO: string;
  countryCode: string;
  city: string;
  rating: number;
  price: number;
  duration: string;
}

const tourSchema = new mongoose.Schema<ITour>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    countryISO: { type: String, required: true },
    countryCode: { type: String, required: true },
    city: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

const Tour = mongoose.model<ITour>('Tour', tourSchema);

export default Tour;
