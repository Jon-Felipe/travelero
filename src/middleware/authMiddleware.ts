import { Request, Response, NextFunction } from 'express';

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('auth middleware');
  next();
}
