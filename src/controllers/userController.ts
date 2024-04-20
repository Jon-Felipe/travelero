import { Request, Response } from 'express';

// @desc    Get current user
// @route   GET /api/v1/users/current-user
// @access  Private
async function getCurrentUser(req: Request, res: Response) {
  res.status(200).json({ msg: 'get current user' });
}

export { getCurrentUser };
