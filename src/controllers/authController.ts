import { Request, Response } from 'express';
import User from '../models/UserModel';
import { createJWT } from '../utils/tokenUtils';

// @desc    Register new user
// @route   POST /api/v1/auth/register
// @access  Public
async function registerUser(req: Request, res: Response) {
  const { firstName, lastName, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('email already exists');
  }
  await User.create({ firstName, lastName, email, password });
  res.status(200).json({ msg: 'user created' });
}

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePasswords(password))) {
    const token = createJWT({ userId: user._id });
    res.status(200).json({ msg: 'user logged in', token });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
}

// @desc    Logout user
// @route   GET /api/v1/auth/logout
// @access  Public
async function logoutUser(req: Request, res: Response) {
  res.send('logout user');
}

export { registerUser, loginUser, logoutUser };
