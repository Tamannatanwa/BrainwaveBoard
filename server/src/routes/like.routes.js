import express from 'express';
import * as likeController from '../controllers/like.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

// All like routes require authentication
router.post('/idea/:ideaId', authenticate, likeController.toggleLike);

export default router;




