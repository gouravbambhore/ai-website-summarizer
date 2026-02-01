import os
import requests

class WebsiteSummarizer:
    """
    A class to summarize website content using Groq's LLM API
    """
    
    def __init__(self):
        """
        Initialize the Groq client
        """
        # Get Groq API key from environment
        self.api_key = os.getenv('GROQ_API_KEY')
        
        if not self.api_key:
            raise ValueError("GROQ_API_KEY not found in environment variables")
        
        # Groq API endpoint
        self.api_url = "https://api.groq.com/openai/v1/chat/completions"
        
        # Use Groq's fastest model
        self.model = "llama-3.3-70b-versatile"
        
        # System prompt for summarization
        self.system_prompt = """You are an assistant that analyzes the contents of a website 
and provides a short summary, ignoring text that might be navigation related. 
Respond in markdown format with clear sections if needed."""
    
    def summarize(self, scraper):
        """
        Generate a summary of the scraped website content
        
        Args:
            scraper (WebsiteScraper): The scraper object containing website data
            
        Returns:
            str: The generated summary in markdown format
        """
        # Create user prompt
        user_prompt = f"""You are looking at a website titled: {scraper.title}

The contents of this website is as follows; please provide a short summary of this website in markdown. 
If it includes news or announcements, then summarize these too.

{scraper.text}"""
        
        # Create messages for the API
        messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": user_prompt}
        ]
        
        # Create request payload
        payload = {
            "model": self.model,
            "messages": messages,
            "temperature": 0.7,
            "max_tokens": 1000
        }
        
        # Set headers
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        try:
            # Call Groq API directly with requests
            response = requests.post(
                self.api_url,
                json=payload,
                headers=headers,
                timeout=60
            )
            
            # Check for errors
            if response.status_code != 200:
                error_detail = response.json() if response.text else {"error": "Unknown error"}
                raise Exception(f"Groq API error {response.status_code}: {error_detail}")
            
            # Extract and return the summary
            result = response.json()
            return result['choices'][0]['message']['content']
            
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to connect to Groq API: {str(e)}")
        except Exception as e:
            raise Exception(f"Failed to generate summary with Groq: {str(e)}")
