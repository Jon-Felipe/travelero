import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';
import { BadRequestError } from '../errors/customErrors';
import User from '../models/UserModel';

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

// auth validation
export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateRegisterInput = withValidationErrors([
  body('firstName').notEmpty().withMessage('first name is required').trim(),
  body('lastName').notEmpty().withMessage('last name is required').trim(),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email: string) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    })
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
]);

// tour validation
export const validateTourInput = withValidationErrors([
  body('title').notEmpty().withMessage('title is required').trim(),
  body('image').notEmpty().withMessage('image url is required').trim(),
  body('country').notEmpty().withMessage('country is required').trim(),
  body('countryISO').notEmpty().withMessage('country iso is required').trim(),
  body('city').notEmpty().withMessage('city is required').trim(),
  body('duration').notEmpty().withMessage('duration is required').trim(),
]);
