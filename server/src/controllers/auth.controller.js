import { successResponse, errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';
import * as authService from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return errorResponse(res, MESSAGES.GENERAL.VALIDATION_ERROR, 400);
    }

    const result = await authService.registerUser({ name, email, password });

    return successResponse(res, result, MESSAGES.AUTH.REGISTER_SUCCESS, 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, MESSAGES.GENERAL.VALIDATION_ERROR, 400);
    }

    const result = await authService.loginUser(email, password);

    return successResponse(res, result, MESSAGES.AUTH.LOGIN_SUCCESS);
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
};

