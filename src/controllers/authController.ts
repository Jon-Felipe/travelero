import { Request, Response } from 'express';
import User from '../models/UserModel';
import { createJWT } from '../utils/tokenUtils';

// extras
import { LoginRequestBody, RegisterRequestBody } from '../utils/types';

// @desc    Register new user
// @route   POST /api/v1/auth/register
// @access  Public
async function registerUser(req: Request, res: Response) {
  const { firstName, lastName, email, password } = <RegisterRequestBody>(
    req.body
  );
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
  const { email, password } = <LoginRequestBody>req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePasswords(password))) {
    const token = createJWT({ userId: user._id });
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
    });
    res.status(200).json({ user });
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
