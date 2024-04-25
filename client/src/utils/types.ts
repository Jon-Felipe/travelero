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

export type UserPayload = {
  user: User;
};

export type Tour = {
  id: string;
  title: string;
  image: string;
  country: string;
  countryCode: string;
  rating: number;
  reviews: number;
  price: number;
  duration: number;
};
