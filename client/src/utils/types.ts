import mongoose from 'mongoose';

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

export type Cart = {
  tour: Partial<Tour>;
  date: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
};

export type AuthSliceState = {
  user: User | null;
};

export type CartSliceState = {
  cart: Cart[] | [];
  totalPrice: number;
};

export type TopDestination = {
  id: number;
  text: string;
  image: string;
  link: string;
};

export type Tour = {
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
};

export type TourFilter = {
  id: number;
  text: string;
  value: string;
};
