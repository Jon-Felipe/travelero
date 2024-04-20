import express from 'express';

import { getCurrentUser } from '../controllers/userController';

const router = express.Router();

router.get('/current-user', getCurrentUser);

export default router;
