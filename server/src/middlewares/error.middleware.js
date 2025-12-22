import { errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';

export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Prisma errors
  if (err.code === 'P2002') {
    return errorResponse(res, 'Duplicate entry', 409);
  }

  if (err.code === 'P2025') {
    return errorResponse(res, MESSAGES.GENERAL.NOT_FOUND, 404);
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    return errorResponse(res, MESSAGES.GENERAL.VALIDATION_ERROR, 400, err.errors);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return errorResponse(res, MESSAGES.AUTH.UNAUTHORIZED, 401);
  }

  // Default error
  return errorResponse(
    res,
    err.message || MESSAGES.GENERAL.SERVER_ERROR,
    err.statusCode || 500
  );
};

export const notFoundHandler = (req, res) => {
  return errorResponse(res, MESSAGES.GENERAL.NOT_FOUND, 404);
};

export default {
  errorHandler,
  notFoundHandler,
};




