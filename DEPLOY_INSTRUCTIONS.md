# Deployment Instructions

## ✅ Code Pushed to GitHub!

Your code is now at: https://github.com/gouravbambhore/ai-website-summarizer

---

## 🚀 Deploy Backend to Render (Free)

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Deploy Backend
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repo: `ai-website-summarizer`
3. Configure:
   - **Name**: `ai-website-summarizer-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Instance Type**: `Free`

4. **Add Environment Variable**:
   - Key: `GROQ_API_KEY`
   - Value: Your Groq API key

5. Click **"Create Web Service"**

6. **Copy your backend URL** (will be like: `https://ai-website-summarizer-backend.onrender.com`)

---

## 🎨 Deploy Frontend to Vercel (Free)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Update API URL
1. Create `frontend/.env.production`:
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   (Replace with your Render backend URL)

### Step 3: Deploy
```bash
cd frontend
vercel --prod
```

Follow the prompts:
- **Set up and deploy**: Yes
- **Which scope**: Your account
- **Link to existing project**: No
- **Project name**: ai-website-summarizer
- **Directory**: `./`
- **Override settings**: No

---

## 🌐 Alternative: Deploy Frontend to Netlify

### Option A: Drag & Drop
1. Build frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag `frontend/dist` folder to deploy

### Option B: GitHub Integration
1. Go to Netlify Dashboard
2. **"New site from Git"** → Connect GitHub
3. Select `ai-website-summarizer`
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
5. Add environment variable:
   - `VITE_API_URL`: Your Render backend URL

---

## ⚙️ Update Frontend After Deployment

After getting your backend URL, update:

**File: `frontend/src/lib/api.ts`**
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.onrender.com';
```

Then redeploy frontend.

---

## 🔍 Verify Deployment

1. **Backend Health Check**: 
   ```
   https://your-backend-url.onrender.com/health
   ```

2. **Frontend**: 
   ```
   https://your-app.vercel.app
   ```

---

## 📝 Post-Deployment

- Update README.md with live demo links
- Test the live application
- Monitor Render logs for any backend issues
- Consider adding a custom domain

**Your app will be publicly accessible!** 🎉
