# Deploy Twenty CRM using Docker

## Option 1: Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Sign up/login with GitHub
3. Click "Deploy from GitHub repo"
4. Select this repository
5. Choose "twenty-docker" as the folder
6. Set environment variables in Railway dashboard:
   ```
   PG_DATABASE_USER=postgres.wyvgpvzanjooxninyfik
   PG_DATABASE_PASSWORD=gfxNMEhCXUjwDB6j
   PG_DATABASE_HOST=aws-0-us-east-2.pooler.supabase.com
   PG_DATABASE_PORT=6543
   REDIS_URL=redis://redis:6379
   APP_SECRET=qVYHphQRlXfru6NmQNiWThnwsamgve2phhWHm4/83pY=
   STORAGE_TYPE=local
   ```
7. Once deployed, update SERVER_URL to your Railway domain

## Option 2: Deploy to Render

1. Go to [Render](https://render.com)
2. Create new "Web Service"
3. Connect GitHub repo
4. Set root directory to `packages/twenty-docker`
5. Use Docker runtime
6. Add environment variables (same as above)

## Option 3: Local with Docker

If you have Docker installed:

```bash
cd packages/twenty-docker
docker-compose up -d
```

## After Deployment

1. Note your deployment URL (e.g., `https://your-app.railway.app`)
2. Update the `SERVER_URL` environment variable to match your domain
3. Update your website URLs to point to the new CRM deployment