import prisma from '../config/db.js';
import { MESSAGES } from '../constants/messages.js';

export const createIdea = async (ideaData, userId) => {
  const { title, description, tags, category } = ideaData;

  const idea = await prisma.idea.create({
    data: {
      title,
      description,
      tags: tags || [],
      category,
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
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });

  return idea;
};

export const getAllIdeas = async (filters = {}) => {
  const { userId, category, search } = filters;

  const where = {};

  if (userId) {
    where.userId = userId;
  }

  if (category) {
    where.category = category;
  }

  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  const ideas = await prisma.idea.findMany({
    where,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
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
  });

  return ideas;
};

export const getIdeaById = async (ideaId) => {
  const idea = await prisma.idea.findUnique({
    where: { id: ideaId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      comments: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });

  if (!idea) {
    throw new Error(MESSAGES.IDEA.NOT_FOUND);
  }

  return idea;
};

export const updateIdea = async (ideaId, ideaData, userId) => {
  // Check if idea exists and belongs to user
  const existingIdea = await prisma.idea.findUnique({
    where: { id: ideaId },
  });

  if (!existingIdea) {
    throw new Error(MESSAGES.IDEA.NOT_FOUND);
  }

  if (existingIdea.userId !== userId) {
    throw new Error(MESSAGES.IDEA.UNAUTHORIZED);
  }

  const { title, description, tags, category } = ideaData;

  const idea = await prisma.idea.update({
    where: { id: ideaId },
    data: {
      ...(title && { title }),
      ...(description && { description }),
      ...(tags && { tags }),
      ...(category && { category }),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });

  return idea;
};

export const deleteIdea = async (ideaId, userId) => {
  // Check if idea exists and belongs to user
  const existingIdea = await prisma.idea.findUnique({
    where: { id: ideaId },
  });

  if (!existingIdea) {
    throw new Error(MESSAGES.IDEA.NOT_FOUND);
  }

  if (existingIdea.userId !== userId) {
    throw new Error(MESSAGES.IDEA.UNAUTHORIZED);
  }

  await prisma.idea.delete({
    where: { id: ideaId },
  });

  return true;
};

export default {
  createIdea,
  getAllIdeas,
  getIdeaById,
  updateIdea,
  deleteIdea,
};

