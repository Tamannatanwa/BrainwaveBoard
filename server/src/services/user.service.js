import prisma from '../config/db.js';
import { MESSAGES } from '../constants/messages.js';

export const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      _count: {
        select: {
          ideas: true,
          comments: true,
          likes: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error(MESSAGES.AUTH.USER_NOT_FOUND);
  }

  return user;
};

export const getUserProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      ideas: {
        select: {
          id: true,
          title: true,
          description: true,
          tags: true,
          category: true,
          createdAt: true,
          _count: {
            select: {
              likes: true,
              comments: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      _count: {
        select: {
          ideas: true,
          comments: true,
          likes: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error(MESSAGES.AUTH.USER_NOT_FOUND);
  }

  return user;
};

export default {
  getUserById,
  getUserProfile,
};


