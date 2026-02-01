# Website Summarizer Backend API

A Flask-based REST API that summarizes website content using Groq's LLM (Llama 3.3 70B).

## 🚀 Features

- **Fast web scraping** using BeautifulSoup
- **AI-powered summaries** using Groq's Llama 3.3 70B model
- **RESTful API** with JSON responses
- **CORS enabled** for frontend integration
- **Error handling** and validation

## 📋 Prerequisites

- Python 3.8 or higher
- Groq API key ([Get one here](https://console.groq.com/keys))

## 🔧 Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On Mac/Linux
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your Groq API key
   # GROQ_API_KEY=your_actual_api_key_here
   ```

## 🏃 Running the Server

Start the Flask development server:

```bash
python app.py
```

The API will be available at: `http://localhost:5000`

## 📡 API Endpoints

### Health Check
**GET** `/health`

Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "message": "Website Summarizer API is running"
}
```

### Summarize Website
**POST** `/summarize`

Summarize a website given its URL.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Success Response:**
```json
{
  "success": true,
  "url": "https://example.com",
  "title": "Example Domain",
  "summary": "## Summary\n\nThis is a markdown-formatted summary..."
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message here"
}
```

## 🧪 Testing the API

### Using cURL:
```bash
curl -X POST http://localhost:5000/summarize \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"https://edwarddonner.com\"}"
```

### Using Python:
```python
import requests

response = requests.post('http://localhost:5000/summarize', json={
    'url': 'https://edwarddonner.com'
})

print(response.json())
```

## 🔑 Getting a Groq API Key

1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key and add it to your `.env` file

## 🛠️ Tech Stack

- **Flask** - Web framework
- **Flask-CORS** - Cross-origin resource sharing
- **BeautifulSoup4** - Web scraping
- **OpenAI Python SDK** - Groq API client
- **Python-dotenv** - Environment variable management

## 📝 Notes

- The API uses Groq's `llama-3.3-70b-versatile` model for fast, high-quality summaries
- Websites with heavy JavaScript may not be fully scraped (consider Selenium for advanced cases)
- Rate limits apply based on your Groq API tier

## 🔗 Frontend Integration

This backend is designed to work with a frontend application. Make sure to:
1. Update CORS settings if needed
2. Use the correct backend URL in your frontend
3. Handle loading states and errors in the UI
