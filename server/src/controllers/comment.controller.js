import prisma from '../config/db.js';
import { successResponse, errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';

export const createComment = async (req, res, next) => {
  try {
    const { ideaId } = req.params;
    const { content } = req.body;
    const userId = req.user.userId;

    if (!content) {
      return errorResponse(res, MESSAGES.GENERAL.VALIDATION_ERROR, 400);
    }

    // Check if idea exists
    const idea = await prisma.idea.findUnique({
      where: { id: ideaId },
    });

    if (!idea) {
      return errorResponse(res, MESSAGES.IDEA.NOT_FOUND, 404);
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        ideaId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return successResponse(res, comment, MESSAGES.COMMENT.CREATED, 201);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const comment = await prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      return errorResponse(res, MESSAGES.COMMENT.NOT_FOUND, 404);
    }

    if (comment.userId !== userId) {
      return errorResponse(res, MESSAGES.COMMENT.UNAUTHORIZED, 403);
    }

    await prisma.comment.delete({
      where: { id },
    });

    return successResponse(res, null, MESSAGES.COMMENT.DELETED);
  } catch (error) {
    next(error);
  }
};

export default {
  createComment,
  deleteComment,
};




