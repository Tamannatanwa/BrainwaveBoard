import prisma from '../config/db.js';
import { successResponse, errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';

export const toggleLike = async (req, res, next) => {
  try {
    const { ideaId } = req.params;
    const userId = req.user.userId;

    // Check if idea exists
    const idea = await prisma.idea.findUnique({
      where: { id: ideaId },
    });

    if (!idea) {
      return errorResponse(res, MESSAGES.IDEA.NOT_FOUND, 404);
    }

    // Check if like already exists
    const existingLike = await prisma.like.findUnique({
      where: {
        ideaId_userId: {
          ideaId,
          userId,
        },
      },
    });

    if (existingLike) {
      // Remove like
      await prisma.like.delete({
        where: {
          ideaId_userId: {
            ideaId,
            userId,
          },
        },
      });

      return successResponse(res, { liked: false }, MESSAGES.LIKE.REMOVED);
    } else {
      // Add like
      const like = await prisma.like.create({
        data: {
          ideaId,
          userId,
        },
      });

      return successResponse(res, { liked: true, like }, MESSAGES.LIKE.ADDED, 201);
    }
  } catch (error) {
    next(error);
  }
};

export default {
  toggleLike,
};


