import { verifyToken } from '../config/jwt.js';
import { errorResponse } from '../utils/response.js';
import { MESSAGES } from '../constants/messages.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return errorResponse(res, MESSAGES.AUTH.UNAUTHORIZED, 401);
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    return errorResponse(res, MESSAGES.AUTH.UNAUTHORIZED, 401);
  }
};

export default authenticate;


