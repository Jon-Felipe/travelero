import express from 'express';
import { updateUser } from '../controllers/userController';
import { authenticateUser } from '../middleware/authMiddleware';
const router = express.Router();

router.patch('/update-user', authenticateUser, updateUser);

export default router;
