import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

// extras
import { verifyJWT } from '../utils/tokenUtils';

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    };
  }
}

interface IJwtPayload extends JwtPayload {
  userId: string;
}

export function authenticateUser(
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
