import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
const app: Express = express();

// routes
import tourRouter from './routes/tourRouter';
import authRouter from './routes/authRouter';

// middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/auth', authRouter);

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Server listening on port ${port}`));
