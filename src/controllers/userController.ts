import { Request, RequestHandler, Response } from 'express';
import User from '../models/UserModel';

// extras
import { UpdateUserRequestBody } from '../utils/types';

interface IAuthUserRequest extends Request {
  user?: {
    userId: string;
  };
}

// @desc    Update User
// @route   PATCH /api/v1/users/update-user
// @access  Private
async function updateUser(req: IAuthUserRequest, res: Response) {
  const newUser = <UpdateUserRequestBody>{ ...req.body };
  delete newUser.email;
  delete newUser.password;

  const user = await User.findByIdAndUpdate(req.user?.userId, newUser, {
    new: true,
  });

  res.status(200).json({ user });
}

export { updateUser };
