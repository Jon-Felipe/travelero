import { Request, Response } from 'express';
import { verifyJWT } from '../utils/tokenUtils';
import User from '../models/UserModel';

interface JWTPayload {
  userId: string;
  iat: number;
  exp: number;
}

// @desc    Get current user
// @route   GET /api/v1/users/current-user
// @access  Private
async function getCurrentUser(req: Request, res: Response) {
  const { token } = req.cookies;
  const data = verifyJWT(token) as JWTPayload;
  const user = await User.findOne({ _id: data.userId });
  res.status(200).json({ msg: 'get current user', user });
}

export { getCurrentUser };
