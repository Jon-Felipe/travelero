import mongoose from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
  email: string;
  password: string;
}

export interface ITour {
  title: string;
  description: string;
  image: string;
  price: number;
  location: {
    city: string;
    country: string;
  };
  rating?: number;
  numOfReviews?: number;
  durations: [
    {
      duration: number;
      unit: string;
    }
  ];
  availableLanguages: string[];
  createdBy: mongoose.Types.ObjectId;
}

export type GetAllToursQuery = {
  sort: 'asc' | 'desc' | 'newest' | 'oldest' | 'priceHighest' | 'priceLowest';
  search: string;
};

export type QueryObject = {
  title?: {
    $regex?: string | RegExp | undefined;
    $options?: string | undefined;
  };
};
