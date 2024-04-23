import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyJWT } from '../utils/tokenUtils';

interface IJwtPayload extends JwtPayload {
  userId: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    };
  }
}

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { token } = req.cookies;
  if (!token) {
    throw new Error('authentication invalid');
  }

  try {
    const { userId } = verifyJWT(token) as IJwtPayload;
    req.user = { userId };
    next();
  } catch (error) {
    throw new Error('authentication invalid');
  }
}
