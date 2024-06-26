import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import User from '../models/UserModel';
import { createJWT } from '../utils/tokenUtils';
import { IUser } from '../utils/types';
import { UnauthenticatedError } from '../errors/customErrors';

// @desc    Register new user
// @route   POST /api/v1/auth/register
// @access  Public
async function registerUser(
  req: Request<
    ParamsDictionary,
    any,
    Pick<IUser, 'firstName' | 'lastName' | 'email' | 'password'>
  >,
  res: Response
) {
  const { email, firstName, lastName, password } = req.body;
  await User.create({ firstName, lastName, email, password });
  res.status(200).json({ msg: 'user created' });
}

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
async function loginUser(
  req: Request<ParamsDictionary, any, Pick<IUser, 'email' | 'password'>>,
  res: Response
) {
  const { email, password } = req.body;
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
    throw new UnauthenticatedError('invalid credentials');
  }
}

// @desc    Logout user
// @route   POST /api/v1/auth/logout
// @access  Private
async function logoutUser(req: Request, res: Response) {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: 'user logged out' });
}

export { registerUser, loginUser, logoutUser };
