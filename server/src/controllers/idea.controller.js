import { successResponse, errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';
import * as ideaService from '../services/idea.service.js';

export const createIdea = async (req, res, next) => {
  try {
    const { title, description, tags, category } = req.body;
    const userId = req.user.userId;

    if (!title || !description) {
      return errorResponse(res, MESSAGES.GENERAL.VALIDATION_ERROR, 400);
    }

    const idea = await ideaService.createIdea(
      { title, description, tags, category },
      userId
    );

    return successResponse(res, idea, MESSAGES.IDEA.CREATED, 201);
  } catch (error) {
    next(error);
  }
};

export const getAllIdeas = async (req, res, next) => {
  try {
    const { userId, category, search } = req.query;

    const ideas = await ideaService.getAllIdeas({ userId, category, search });

    return successResponse(res, ideas, MESSAGES.IDEA.FETCHED);
  } catch (error) {
    next(error);
  }
};

export const getIdeaById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const idea = await ideaService.getIdeaById(id);

    return successResponse(res, idea, MESSAGES.IDEA.FETCHED);
  } catch (error) {
    next(error);
  }
};

export const updateIdea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const { title, description, tags, category } = req.body;

    const idea = await ideaService.updateIdea(id, { title, description, tags, category }, userId);

    return successResponse(res, idea, MESSAGES.IDEA.UPDATED);
  } catch (error) {
    next(error);
  }
};

export const deleteIdea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    await ideaService.deleteIdea(id, userId);

    return successResponse(res, null, MESSAGES.IDEA.DELETED);
  } catch (error) {
    next(error);
  }
};

export default {
  createIdea,
  getAllIdeas,
  getIdeaById,
  updateIdea,
  deleteIdea,
};

