import { Request, Response, NextFunction } from 'express';
import { BadRequestError, NotFoundError } from '../errors/customErrors';

function errorHandlerMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof NotFoundError || err instanceof BadRequestError) {
    const statusCode = err.statusCode || 500;
    const msg = err.message || 'something went wrong, try again later';
    res.status(statusCode).json({ msg });
  }
}

export default errorHandlerMiddleware;
