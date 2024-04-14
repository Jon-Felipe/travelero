import express, { Express, Request, Response } from 'express';
const app: Express = express();

// routes
import tourRouter from './routes/tourRouter';

// middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/tours', tourRouter);

const port = 5100;

app.listen(port, () => console.log(`Server listening on port ${port}`));
