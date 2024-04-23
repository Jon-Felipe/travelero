import { Request, Response } from 'express';

interface IAuthUserRequest extends Request {
  user?: {
    userId: string;
  };
}

// @desc    Update User
// @route   PATCH /api/v1/users/update-user
// @access  Private
async function updateUser(req: IAuthUserRequest, res: Response) {
  res.send('update profile');
}

export { updateUser };
