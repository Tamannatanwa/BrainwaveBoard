export const MESSAGES = {
  // Auth messages
  AUTH: {
    REGISTER_SUCCESS: 'User registered successfully',
    LOGIN_SUCCESS: 'User logged in successfully',
    LOGOUT_SUCCESS: 'User logged out successfully',
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'Unauthorized access',
    TOKEN_EXPIRED: 'Token has expired',
    USER_NOT_FOUND: 'User not found',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
  },

  // Idea messages
  IDEA: {
    CREATED: 'Idea created successfully',
    UPDATED: 'Idea updated successfully',
    DELETED: 'Idea deleted successfully',
    NOT_FOUND: 'Idea not found',
    UNAUTHORIZED: 'You are not authorized to perform this action',
    FETCHED: 'Ideas fetched successfully',
  },

  // Comment messages
  COMMENT: {
    CREATED: 'Comment created successfully',
    UPDATED: 'Comment updated successfully',
    DELETED: 'Comment deleted successfully',
    NOT_FOUND: 'Comment not found',
    UNAUTHORIZED: 'You are not authorized to perform this action',
  },

  // Like messages
  LIKE: {
    ADDED: 'Like added successfully',
    REMOVED: 'Like removed successfully',
    ALREADY_LIKED: 'You have already liked this idea',
  },

  // General messages
  GENERAL: {
    SERVER_ERROR: 'Internal server error',
    VALIDATION_ERROR: 'Validation error',
    NOT_FOUND: 'Resource not found',
  },
};

export default MESSAGES;




