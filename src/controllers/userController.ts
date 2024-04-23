import { Request, Response } from 'express';
import User from '../models/UserModel';

// @desc    Update User
// @route   PATCH /api/v1/users/update-user
// @access  Private
async function updateUser(req: Request, res: Response) {
  res.send('update profile');
}

export { updateUser };
