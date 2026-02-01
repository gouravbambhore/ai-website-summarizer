import os
from openai import OpenAI

class WebsiteSummarizer:
    """
    A class to summarize website content using Groq's LLM API
    """
    
    def __init__(self):
        """
        Initialize the Groq client
        """
        # Get Groq API key from environment
        api_key = os.getenv('GROQ_API_KEY')
        
        if not api_key:
            raise ValueError("GROQ_API_KEY not found in environment variables")
        
        # Initialize OpenAI client with Groq's endpoint
        self.client = OpenAI(
            api_key=api_key,
            base_url="https://api.groq.com/openai/v1"
        )
        
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
        
        try:
            # Call Groq API
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=0.7,
                max_tokens=1000
            )
            
            # Extract and return the summary
            return response.choices[0].message.content
            
        except Exception as e:
            raise Exception(f"Failed to generate summary with Groq: {str(e)}")
