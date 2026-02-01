from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from scraper import WebsiteScraper
from summarizer import WebsiteSummarizer

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Initialize summarizer with Groq API
summarizer = WebsiteSummarizer()

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Website Summarizer API is running'
    })

@app.route('/summarize', methods=['POST'])
def summarize_website():
    """
    Summarize a website given its URL
    
    Expected JSON body:
    {
        "url": "https://example.com"
    }
    
    Returns:
    {
        "success": true,
        "url": "https://example.com",
        "title": "Website Title",
        "summary": "Generated summary..."
    }
    """
    try:
        # Get URL from request
        data = request.get_json()
        
        if not data or 'url' not in data:
            return jsonify({
                'success': False,
                'error': 'URL is required in request body'
            }), 400
        
        url = data['url']
        
        # Validate URL format
        if not url.startswith(('http://', 'https://')):
            return jsonify({
                'success': False,
                'error': 'Invalid URL format. Must start with http:// or https://'
            }), 400
        
        # Scrape website
        scraper = WebsiteScraper(url)
        
        # Generate summary using Groq
        summary = summarizer.summarize(scraper)
        
        # Return successful response
        return jsonify({
            'success': True,
            'url': url,
            'title': scraper.title,
            'summary': summary
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    # Check if Groq API key is set
    if not os.getenv('GROQ_API_KEY'):
        print("⚠️  WARNING: GROQ_API_KEY not found in environment variables!")
        print("Please create a .env file with your Groq API key")
    
    print("🚀 Starting Website Summarizer Backend...")
    port = int(os.getenv('PORT', 8000))
    print(f"📡 API available at http://localhost:{port}")
    print("📖 Endpoints:")
    print("   - GET  /health - Health check")
    print("   - POST /summarize - Summarize a website")
    
    app.run(debug=False, host='0.0.0.0', port=port)

