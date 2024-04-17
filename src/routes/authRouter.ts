import express, { Request, Response } from 'express';
import User from '../models/UserModel';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('email already exists');
  }
  const user = await User.create({ firstName, lastName, email, password });
  res.status(200).json({ user });
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.comparePasswords(password))) {
    res.status(200).json({ msg: 'user logged in' });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  res.send('logout user');
});

export default router;
