# Deployment Guide for BrainwaveBoard

This guide explains how to deploy both the frontend and backend to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install globally with `npm install -g vercel`
3. **Database**: Set up PostgreSQL database (can use Vercel Postgres, Supabase, or any PostgreSQL provider)

## Step 1: Prepare Environment Variables

### Backend Environment Variables

Create a `.env` file in the `server/` directory:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"
CORS_ORIGIN="https://your-frontend-domain.vercel.app"
NODE_ENV="production"
PORT=3000
```

### Frontend Environment Variables

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL="https://your-backend-domain.vercel.app"
```

## Step 2: Deploy Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all variables from your `.env` file

5. Note the deployment URL (e.g., `https://your-backend.vercel.app`)

## Step 3: Deploy Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Update `.env` with your backend URL:
   ```env
   VITE_API_URL="https://your-backend.vercel.app"
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Set environment variables in Vercel dashboard:
   - Add `VITE_API_URL` with your backend URL

## Step 4: Database Setup

1. Run Prisma migrations:
   ```bash
   cd server
   bun run prisma:migrate deploy
   ```

   Or use Vercel's build command to run migrations automatically.

2. Update `vercel.json` in server to include migration step:
   ```json
   {
     "buildCommand": "bun run prisma:generate && bun run prisma:migrate deploy"
   }
   ```

## Step 5: Update CORS Settings

After deploying frontend, update the backend's `CORS_ORIGIN` environment variable in Vercel to match your frontend URL.

## Alternative: Using Deployment Script

You can use the provided deployment script:

```bash
chmod +x deploy.sh
./deploy.sh
```

This script will:
- Check for Vercel CLI
- Deploy backend
- Deploy frontend
- Update environment variables

## Troubleshooting

### Backend Issues

1. **Database Connection**: Ensure `DATABASE_URL` is correctly set
2. **CORS Errors**: Update `CORS_ORIGIN` to match your frontend URL
3. **Prisma Errors**: Run `bun run prisma:generate` before deployment

### Frontend Issues

1. **API Connection**: Verify `VITE_API_URL` points to your backend
2. **Build Errors**: Check that all dependencies are installed
3. **Environment Variables**: Ensure variables are prefixed with `VITE_`

## Manual Deployment Steps

### Backend (Vercel)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your repository
4. Set root directory to `server`
5. Framework preset: "Other"
6. Build command: `bun run prisma:generate`
7. Output directory: (leave empty)
8. Install command: `bun install`
9. Add environment variables
10. Deploy

### Frontend (Vercel)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your repository
4. Set root directory to `client`
5. Framework preset: "Vite"
6. Build command: `npm run build`
7. Output directory: `dist`
8. Install command: `npm install`
9. Add environment variables
10. Deploy

## Post-Deployment Checklist

- [ ] Backend is accessible at the deployed URL
- [ ] Frontend can connect to backend API
- [ ] Database migrations are applied
- [ ] Environment variables are set correctly
- [ ] CORS is configured properly
- [ ] Authentication is working
- [ ] All API endpoints are functional

## Support

For issues, check:
- Vercel deployment logs
- Browser console for frontend errors
- Backend logs in Vercel dashboard


