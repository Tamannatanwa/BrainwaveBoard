import express from 'express';
import * as commentController from '../controllers/comment.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

// All comment routes require authentication
router.post('/idea/:ideaId', authenticate, commentController.createComment);
router.delete('/:id', authenticate, commentController.deleteComment);

export default router;




