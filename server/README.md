# BrainwaveBoard Server

Backend server for BrainwaveBoard application built with Express, Prisma, and PostgreSQL.

## Project Structure

```
server/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── app.js              # Express app config
│   ├── server.js           # Entry point
│
│   ├── config/
│   │   ├── db.js           # Prisma client
│   │   ├── env.js          # Env variables
│   │   └── jwt.js          # JWT config
│
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── idea.routes.js
│   │   ├── comment.routes.js
│   │   └── like.routes.js
│
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── idea.controller.js
│   │   ├── comment.controller.js
│   │   └── like.controller.js
│
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── idea.service.js
│   │   └── user.service.js
│
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│
│   ├── utils/
│   │   ├── hash.js          # bcrypt helpers
│   │   └── response.js      # common responses
│
│   └── constants/
│       └── messages.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

## Setup Instructions

### 1. Install Dependencies

```bash
bun install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and update with your values:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 3000)
- `CORS_ORIGIN` - Frontend URL (default: http://localhost:5173)

### 3. Database Setup

```bash
# Generate Prisma Client
bun run prisma:generate

# Run migrations
bun run prisma:migrate

# (Optional) Open Prisma Studio
bun run prisma:studio
```

### 4. Start Server

```bash
# Development
bun run dev

# Production
bun run start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Ideas
- `GET /api/ideas` - Get all ideas (with optional filters: userId, category, search)
- `GET /api/ideas/:id` - Get idea by ID
- `POST /api/ideas` - Create idea (requires auth)
- `PUT /api/ideas/:id` - Update idea (requires auth)
- `DELETE /api/ideas/:id` - Delete idea (requires auth)

### Comments
- `POST /api/comments/idea/:ideaId` - Create comment (requires auth)
- `DELETE /api/comments/:id` - Delete comment (requires auth)

### Likes
- `POST /api/likes/idea/:ideaId` - Toggle like (requires auth)

## Authentication

Protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <token>
```

## Database Schema

- **User**: id, name, email, password, createdAt, updatedAt
- **Idea**: id, title, description, tags, category, userId, createdAt, updatedAt
- **Comment**: id, content, ideaId, userId, createdAt, updatedAt
- **Like**: id, ideaId, userId, createdAt

## Technologies

- **Runtime**: Bun
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
