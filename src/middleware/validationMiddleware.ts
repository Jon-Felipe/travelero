import { Request, Response, NextFunction } from 'express';

import { body, validationResult, ValidationChain } from 'express-validator';
import { BadRequestError } from '../errors/customErrors';

const withValidationErrors = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      throw new BadRequestError(errorMessages.toString());
    }

    next();
  };
};

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password length must be at least 6 characters'),
]);
