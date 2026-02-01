# Website Summarizer - Quick Start Guide

## 🎯 What You Have

A complete full-stack AI website summarizer with:
- ✅ Flask backend with Groq API integration
- ✅ React frontend with beautiful dark UI
- ✅ All components and configurations ready

## 🚀 Step 1: Set Up the Backend

```bash
# Navigate to backend
cd "e:\Website summarizer\backend"

# Install Python dependencies
pip install -r requirements.txt

# Create environment file
copy .env.example .env

# Edit .env and add your Groq API key
# Get your free key from: https://console.groq.com/keys
notepad .env
```

In the `.env` file, add:
```
GROQ_API_KEY=your_actual_groq_api_key_here
```

## 🚀 Step 2: Start the Backend

```bash
python app.py
```

You should see:
```
🚀 Starting Website Summarizer Backend...
📡 API available at http://localhost:5000
```

Keep this terminal running!

## 🎨 Step 3: Set Up the Frontend

Open a **new terminal** and run:

```bash
# Navigate to frontend
cd "e:\Website summarizer\frontend"

# Install Node dependencies
npm install

# Start development server
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
```

## 🌐 Step 4: Open the App

Open your browser and go to: **http://localhost:3000**

You should see the beautiful dark UI with:
- "AI-Powered Summarizer" badge
- Large "Website Summarizer" title with cyan gradient
- URL input field
- "Summarize" button
- Three feature cards below

## 🧪 Step 5: Test It!

1. Enter a website URL (e.g., `https://edwarddonner.com`)
2. Click "Summarize"
3. Wait a few seconds
4. See the AI-generated summary appear!

## ❓ Troubleshooting

### Backend Issues

**Problem**: `GROQ_API_KEY not found`
- **Solution**: Make sure you created `.env` file in the backend directory and added your API key

**Problem**: `Module not found` errors
- **Solution**: Run `pip install -r requirements.txt` in the backend directory

### Frontend Issues

**Problem**: `Cannot find module` errors
- **Solution**: Run `npm install` in the frontend directory

**Problem**: Can't connect to backend
- **Solution**: Make sure the backend is running on `http://localhost:5000`

## 📝 Project Structure

```
Website summarizer/
├── backend/                 # Flask API
│   ├── app.py              # Main server
│   ├── scraper.py          # Web scraping
│   ├── summarizer.py       # Groq integration
│   └── requirements.txt    # Dependencies
│
└── frontend/               # React app
    ├── src/               
    │   ├── components/    # UI components  
    │   ├── pages/         # Page components
    │   └── lib/           # API client
    └── package.json       # Dependencies
```

## 🎉 You're Done!

Your full-stack AI website summarizer is now running!

### What to Try:
- Summarize news websites like CNN, BBC
- Try documentation sites
- Test with blogs and articles
- See the snarky AI personality in action!

### Get Your Groq API Key:
Visit [console.groq.com/keys](https://console.groq.com/keys) and sign up for a free account.

---

Built with ❤️ and a healthy dose of sarcasm
