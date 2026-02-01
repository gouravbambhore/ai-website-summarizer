# Website Summarizer 🚀

An AI-powered web application that transforms any website into a concise, intelligent summary using advanced LLM technology.

🌐 **[Live Demo](#)** | 📖 **[Documentation](#getting-started)** | 🐛 **[Report Bug](../../issues)**

![Website Summarizer](https://img.shields.io/badge/AI-Powered-teal?style=for-the-badge)
![Flask](https://img.shields.io/badge/Flask-Backend-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-Frontend-cyan?style=for-the-badge)

---

## ✨ Features

- 🤖 **AI-Powered Analysis** - Uses Groq's Llama 3.3 70B model for intelligent summarization
- 🌐 **Universal Compatibility** - Works with blogs, news sites, documentation, and more
- ⚡ **Lightning Fast** - Get summaries in seconds with Groq's optimized inference
- 📱 **Fully Responsive** - Beautiful UI that works on mobile, tablet, and desktop
- 🎨 **Modern Design** - Dark theme with cyan accents and smooth animations
- 📝 **Markdown Output** - Well-formatted summaries with headings, lists, and emphasis

---

## 🏗️ Project Structure

```
website-summarizer/
├── backend/              # Flask API server
│   ├── app.py           # Main application
│   ├── scraper.py       # Web scraping logic
│   ├── summarizer.py    # Groq API integration
│   ├── requirements.txt # Python dependencies
│   └── .env.example     # Environment template
│
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   ├── package.json     # Node dependencies
│   └── vite.config.ts   # Vite configuration
│
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- Groq API key ([Get one free](https://console.groq.com/keys))

### Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/website-summarizer.git
cd website-summarizer
```

#### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add your Groq API key to .env
```

**Start the backend:**
```bash
python app.py
```
Backend runs at: `http://localhost:8000`

#### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install

# Start development server
npm run dev
```
Frontend runs at: `http://localhost:3000`

#### 4️⃣ Open in Browser

Visit `http://localhost:3000` and start summarizing websites! 🎉

---

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### Frontend Environment Variables (Optional)

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:8000
```

---

## 📖 API Documentation

### POST /summarize

Summarizes a website given its URL.

**Request:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "success": true,
  "url": "https://example.com",
  "title": "Example Domain",
  "summary": "# Example Domain\n\nThis domain is for use in illustrative examples..."
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "message": "Website Summarizer API is running"
}
```

---

## 🛠️ Tech Stack

### Backend
- **Flask** - Web framework
- **Groq** - LLM API (Llama 3.3 70B)
- **BeautifulSoup** - Web scraping
- **Flask-CORS** - Cross-origin support

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation

---

## 📱 Responsive Design

The application is fully optimized for all devices:

- 📱 **Mobile** (320px+): Stacked layout, touch-optimized
- 📱 **Tablet** (640px+): 2-column grid
- 💻 **Desktop** (1024px+): 3-column grid, hover effects

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Groq](https://groq.com) for the blazing-fast LLM API
- [shadcn/ui](https://ui.shadcn.com) for beautiful UI components
- [Lucide](https://lucide.dev) for icons



---


