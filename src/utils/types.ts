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
  country: string;
  countryISO: string;
  city: string;
  rating: number | undefined;
  price: number | undefined;
  duration: string;
  highlights: string[] | undefined;
  included: string[] | undefined;
  excluded: string[] | undefined;
  tourType: TourType;
  groupSize: number;
  languages: string[];
  createdBy: mongoose.Types.ObjectId;
}

type TourType =
  | 'bus'
  | 'group'
  | 'luxury'
  | 'wildlife'
  | 'food & wine'
  | 'adventure';

export type GetAllToursQuery = {
  sort: 'asc' | 'desc' | 'newest' | 'lowest' | 'priceHighest' | 'priceLowest';
};
