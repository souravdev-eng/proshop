import express from 'express';
import {
  getProfile,
  login,
  signUp,
  updateProfile,
} from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(signUp);

router.post('/login', login);
router.route('/profile').get(protect, getProfile).put(protect, updateProfile);

export default router;
