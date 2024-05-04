import express from 'express';

import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware';

const router = express.Router();

router.post('/register', validateRegisterInput, registerUser);
router.post('/login', validateLoginInput, loginUser);
router.post('/logout', logoutUser);

export default router;
