import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);
router.post(
  '/login',
  [
    body('email')
      .notEmpty()
      .withMessage('email is required')
      .isEmail()
      .withMessage('please provide a valid email')
      .trim(),
    body('password')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('password must be at leat 6 characters'),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log(errors, '==errors==');
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      res.status(400).json({ errors: errorMessages });
    }
    next();
  },
  loginUser
);
router.post('/logout', logoutUser);

export default router;
