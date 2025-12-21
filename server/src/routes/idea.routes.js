import express from 'express';
import * as ideaController from '../controllers/idea.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', ideaController.getAllIdeas);
router.get('/:id', ideaController.getIdeaById);

// Protected routes
router.post('/', authenticate, ideaController.createIdea);
router.put('/:id', authenticate, ideaController.updateIdea);
router.delete('/:id', authenticate, ideaController.deleteIdea);

export default router;


