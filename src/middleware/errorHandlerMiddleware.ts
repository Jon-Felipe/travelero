import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors/customErrors';

function errorHandlerMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err instanceof NotFoundError) {
    const statusCode = err.statusCode || 500;
    const msg = err.message || 'something went wrong, try again later';
    res.status(statusCode).json({ msg });
  }
}

export default errorHandlerMiddleware;
