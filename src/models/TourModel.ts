import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    countryCode: { type: String, required: true },
    rating: { type: Number, default: 0 },
    price: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true }
);

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;
