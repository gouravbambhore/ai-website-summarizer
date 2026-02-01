# 🚀 Step-by-Step Deployment Guide

## Part 1: Deploy Backend to Render (5-10 minutes)

### Step 1: Sign Up for Render
1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with **GitHub** (click the GitHub button)
4. Authorize Render to access your GitHub

### Step 2: Create New Web Service
1. Once logged in, click **"New +"** button (top right)
2. Select **"Web Service"**

### Step 3: Connect Your Repository
1. Click **"Connect account"** if not already connected
2. Search for: **`ai-website-summarizer`**
3. Click **"Connect"** next to your repository

### Step 4: Configure Service
Fill in these settings:

- **Name**: `ai-website-summarizer-backend` (or any name you like)
- **Region**: Choose closest to you (e.g., Singapore, Frankfurt, Ohio)
- **Root Directory**: `backend`
- **Environment**: `Python 3`
- **Branch**: `main`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `python app.py`

### Step 5: Select Free Plan
- Scroll down to **"Instance Type"**
- Select **"Free"** ($0/month)

### Step 6: Add Environment Variable
1. Scroll to **"Environment Variables"**
2. Click **"Add Environment Variable"**
3. **Key**: `GROQ_API_KEY`
4. **Value**: Paste your Groq API key
5. Click **"Add"**

### Step 7: Deploy!
1. Click **"Create Web Service"** at the bottom
2. Wait 3-5 minutes for deployment
3. Watch the logs scroll by
4. When you see **"Your service is live"** - it's done! ✅

### Step 8: Copy Your Backend URL
1. At the top of the page, you'll see your service URL
2. It will look like: `https://ai-website-summarizer-backend.onrender.com`
3. **COPY THIS URL** - you'll need it for frontend!

### Step 9: Test Your Backend
Visit: `https://your-backend-url.onrender.com/health`

You should see:
```json
{
  "status": "healthy",
  "message": "Website Summarizer API is running"
}
```

✅ **Backend is LIVE!**

---

## Part 2: Deploy Frontend to Vercel (3-5 minutes)

### Step 1: Update API URL in Code
1. Open: `frontend/src/lib/api.ts`
2. Change line 1 to:
   ```typescript
   const API_BASE_URL = 'https://YOUR-BACKEND-URL.onrender.com';
   ```
   (Replace with your actual Render URL)

### Step 2: Commit and Push Changes
```bash
git add frontend/src/lib/api.ts
git commit -m "Update API URL for production"
git push origin main
```

### Step 3: Sign Up for Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel

### Step 4: Import Your Project
1. Click **"Add New..."** → **"Project"**
2. Find **`ai-website-summarizer`** in the list
3. Click **"Import"**

### Step 5: Configure Project
1. **Framework Preset**: Vite (should auto-detect)
2. **Root Directory**: Click "Edit" → Select `frontend` folder → Click "Continue"
3. **Build Command**: `npm run build` (should be filled)
4. **Output Directory**: `dist` (should be filled)

### Step 6: Add Environment Variable (Optional)
1. Expand **"Environment Variables"** section
2. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: Your Render backend URL

### Step 7: Deploy!
1. Click **"Deploy"**
2. Wait 1-2 minutes
3. You'll see confetti when it's done! 🎉

### Step 8: Visit Your Live Site!
1. Click **"Visit"** or the URL shown
2. Your app is now **LIVE** and **PUBLIC**! 🌐

---

## 🎉 You're LIVE!

Your website summarizer is now accessible to anyone in the world!

**Frontend URL**: `https://your-app.vercel.app`  
**Backend URL**: `https://your-backend.onrender.com`

### Share It:
- Add live demo link to your GitHub README
- Share with friends
- Add to your portfolio

### ⚠️ Important Notes:

**Render Free Tier:**
- Backend sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- Subsequent requests are fast

**To keep it awake** (optional):
- Use a service like UptimeRobot to ping your backend every 10 minutes

---

## 🐛 Troubleshooting

**Backend Error?**
- Check Render logs for errors
- Verify `GROQ_API_KEY` is set correctly
- Make sure `requirements.txt` has all dependencies

**Frontend Can't Connect?**
- Verify `api.ts` has correct backend URL
- Check browser console for CORS errors
- Make sure backend is running (visit `/health` endpoint)

**Still Stuck?**
Open a GitHub issue and I'll help! 😊
