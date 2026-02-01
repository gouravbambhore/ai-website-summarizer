# Deployment Guide

## Deploy to Production

### Backend Deployment (Railway/Render/Heroku)

1. **Prepare for deployment:**
   ```bash
   cd backend
   ```

2. **Create a `Procfile`** (for Heroku):
   ```
   web: python app.py
   ```

3. **Set environment variables** on your hosting platform:
   ```
   GROQ_API_KEY=your_production_api_key
   ```

4. **Deploy:**
   - **Railway**: Connect your GitHub repo and deploy automatically
   - **Render**: Create a new web service from your repo
   - **Heroku**: Use `git push heroku main`

### Frontend Deployment (Vercel/Netlify)

1. **Update API URL** in `frontend/.env`:
   ```env
   VITE_API_URL=https://your-backend-url.com
   ```

2. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy:**
   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag `dist` folder to Netlify or use CLI

### Environment Variables

**Backend:**
- `GROQ_API_KEY`: Your Groq API key

**Frontend:**
- `VITE_API_URL`: Backend API URL (default: http://localhost:8000)

---

## Docker Deployment (Optional)

### Backend Dockerfile

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]
```

### Frontend Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - GROQ_API_KEY=${GROQ_API_KEY}
    
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    environment:
      - VITE_API_URL=http://backend:8000
```

Run with: `docker-compose up -d`

---

## Security Notes

- Never commit `.env` files
- Use environment variables for all secrets
- Enable CORS only for trusted domains in production
- Use HTTPS in production
- Rate limit your API endpoints

---

## Monitoring

Consider adding:
- Application logging (e.g., Sentry)
- Performance monitoring
- API usage tracking
- Error alerting
