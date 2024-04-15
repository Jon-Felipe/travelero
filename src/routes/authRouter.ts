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

router.post('/login', (req: Request, res: Response) => {
  res.send('login user');
});

router.get('/logout', (req: Request, res: Response) => {
  res.send('logout user');
});

export default router;
