import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('get all tour listings');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('get tour by id');
});

router.post('/', (req: Request, res: Response) => {
  res.send('create tour');
});

export default router;
