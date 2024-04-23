import { Request, Response } from 'express';
import User from '../models/UserModel';

interface UpdateUserRequestBody {
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

// @desc    Update User
// @route   PATCH /api/v1/users/update-user
// @access  Private
async function updateUser(req: Request, res: Response) {
  const newUser = <UpdateUserRequestBody>{ ...req.body };
  delete newUser.email;
  delete newUser.password;

  const user = await User.findByIdAndUpdate(req.user?.userId, newUser, {
    new: true,
  });

  res.status(200).json({ user });
}

export { updateUser };
