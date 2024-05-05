import mongoose from 'mongoose';

export type TopDestination = {
  id: number;
  image: string;
  title: string;
  toursTotal: number;
};

export type ProfileLink = {
  id: number;
  text: string;
  link: string;
  icon: React.ReactNode;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type HeroFormData = {
  location: string;
  date: string;
  checkOut: string;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
};

export type AuthSliceState = {
  user: User | null;
};

export type Tour = {
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
};

type TourType =
  | 'bus'
  | 'group'
  | 'luxury'
  | 'wildlife'
  | 'food & wine'
  | 'adventure';

export type TourFilter = {
  id: number;
  text: string;
};
