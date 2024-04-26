import { Request } from 'express';

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

export interface RequestCustom extends Request {
  user?: {
    userId: string;
  };
}
