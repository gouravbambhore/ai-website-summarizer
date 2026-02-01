# Website Summarizer Frontend

A modern React + TypeScript frontend for the AI-powered website summarizer.

## 🎨 Features

- **Beautiful Dark UI** with cyan/teal gradient accents
- **AI-Powered Summaries** using Groq's Llama 3.3 70B
- **Responsive Design** works on desktop and mobile
- **Markdown Support** for formatted summaries
- **Toast Notifications** for user feedback
- **Modern Tech Stack** React 18 + Vite + TypeScript + Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or use [nvm](https://github.com/nvm-sh/nvm))
- Backend server running (see `../backend/README.md`)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🛠️ Development

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── FloatingOrbs.tsx
│   ├── LoadingAnimation.tsx
│   ├── NavLink.tsx
│   ├── SummaryDisplay.tsx
│   └── UrlInput.tsx
├── lib/                # Utilities
│   ├── api.ts         # API client
│   └── utils.ts       # Helper functions
├── pages/             # Page components
│   ├── Index.tsx      # Main page
│   └── NotFound.tsx   # 404 page
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 Backend Connection

The frontend connects to the backend API at `http://localhost:5000` by default (configured in `vite.config.ts`).

Make sure your backend is running before starting the frontend:

```bash
# In the backend directory
python app.py
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components with Tailwind CSS for styling.

### Color Scheme

- **Background**: Dark slate gradient (`slate-900` to `teal-900`)
- **Accent**: Cyan/Teal (`cyan-400`, `teal-500`)
- **Text**: White with slate for muted text

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

You can deploy this frontend to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

Make sure to update the `VITE_API_URL` environment variable to point to your production backend.

## 📝 License

MIT
