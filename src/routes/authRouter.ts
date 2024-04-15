import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/register', (req: Request, res: Response) => {
  res.send('register user');
});

router.post('/login', (req: Request, res: Response) => {
  res.send('login user');
});

router.get('/logout', (req: Request, res: Response) => {
  res.send('logout user');
});

export default router;
