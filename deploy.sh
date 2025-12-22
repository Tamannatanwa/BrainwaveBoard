#!/bin/bash

# BrainwaveBoard Deployment Script for Vercel
# This script helps deploy both frontend and backend to Vercel

echo "🚀 BrainwaveBoard Deployment Script"
echo "===================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy Backend
echo ""
echo "📦 Deploying Backend..."
cd server

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found in server directory"
    echo "📝 Please create .env file with required environment variables:"
    echo "   - DATABASE_URL"
    echo "   - JWT_SECRET"
    echo "   - CORS_ORIGIN"
    echo ""
    read -p "Continue with deployment? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "🔧 Setting up Prisma..."
bun run prisma:generate

echo "🌐 Deploying to Vercel..."
vercel --prod

BACKEND_URL=$(vercel ls | grep server | head -1 | awk '{print $2}')
echo "✅ Backend deployed at: $BACKEND_URL"

cd ..

# Deploy Frontend
echo ""
echo "📦 Deploying Frontend..."
cd client

# Update .env file with backend URL
if [ -f .env ]; then
    sed -i "s|VITE_API_URL=.*|VITE_API_URL=$BACKEND_URL|g" .env
else
    echo "VITE_API_URL=$BACKEND_URL" > .env
fi

echo "🌐 Deploying to Vercel..."
vercel --prod

FRONTEND_URL=$(vercel ls | grep client | head -1 | awk '{print $2}')
echo "✅ Frontend deployed at: $FRONTEND_URL"

cd ..

echo ""
echo "✨ Deployment Complete!"
echo "======================"
echo "Frontend: $FRONTEND_URL"
echo "Backend: $BACKEND_URL"
echo ""
echo "📝 Don't forget to:"
echo "   1. Update CORS_ORIGIN in backend environment variables"
echo "   2. Run database migrations: bun run prisma:migrate"
echo "   3. Update VITE_API_URL in frontend environment variables"


