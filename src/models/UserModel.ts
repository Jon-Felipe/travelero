import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { IUser } from '../utils/types';

interface IUserMethods {
  comparePasswords(password: string): Promise<boolean>;
}

type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    country: { type: String },
    city: { type: String },
    postalCode: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 6 },
  },
  { timestamps: true }
);

userSchema.methods.comparePasswords = async function (
  password: string
): Promise<boolean> {
  const passwordsMatch = await bcrypt.compare(password, this.password);
  return passwordsMatch;
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User: UserModel = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
