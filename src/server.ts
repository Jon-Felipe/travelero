import 'express-async-errors';
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app: Express = express();

// routes
import tourRouter from './routes/tourRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';

// middleware
app.use(express.json());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 5100;

async function connectDb() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDb();
