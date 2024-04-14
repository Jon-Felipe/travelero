import express, { Express, Request, Response } from 'express';
const app: Express = express();

// middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/tours', (req: Request, res: Response) => {
  res.send('get all tours');
});

app.get('/tours/:id', (req: Request, res: Response) => {
  res.send('get signle tour');
});

const port = 5100;

app.listen(port, () => console.log(`Server listening on port ${port}`));
