import { ParamsDictionary } from 'express-serve-static-core';
import { Request, Response } from 'express';

// extras
import User from '../models/UserModel';
import { IUser } from '../utils/types';

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    };
  }
}

// @desc    Update User
// @route   PATCH /api/v1/users/update-user
// @access  Private
async function updateUser(
  req: Request<ParamsDictionary, any, Omit<IUser, 'email' | 'password'>>,
  res: Response
) {
  const newUser = req.body;
  const user = await User.findByIdAndUpdate(req.user?.userId, newUser, {
    new: true,
  });
  res.status(200).json({ user });
}

export { updateUser };
