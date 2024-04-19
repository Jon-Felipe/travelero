import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export function createJWT(payload: { userId: Types.ObjectId }) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
}
