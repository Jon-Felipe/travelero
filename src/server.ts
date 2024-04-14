import express, { Express, Request, Response } from 'express';
const app: Express = express();

// middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const port = 5100;

app.listen(port, () => console.log(`Server listening on port ${port}`));
