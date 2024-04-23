import mongoose from 'mongoose';

// user model
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

export interface IUserMethods {
  comparePasswords(password: string): Promise<boolean>;
}

export type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

// auth controller
export interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

// user controller
export interface UpdateUserRequestBody {
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}
