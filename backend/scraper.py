import requests
from bs4 import BeautifulSoup

class WebsiteScraper:
    """
    A class to scrape and extract text content from websites
    """
    
    # Headers to mimic a real browser request
    HEADERS = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
    }
    
    def __init__(self, url):
        """
        Initialize the scraper and fetch the website content
        
        Args:
            url (str): The URL of the website to scrape
        """
        self.url = url
        self.title = "No title found"
        self.text = ""
        
        try:
            # Fetch the website
            response = requests.get(url, headers=self.HEADERS, timeout=10)
            response.raise_for_status()
            
            # Parse HTML with BeautifulSoup
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract title
            self.title = soup.title.string if soup.title else "No title found"
            
            # Remove irrelevant elements
            if soup.body:
                for irrelevant in soup.body(["script", "style", "img", "input", "nav", "footer"]):
                    irrelevant.decompose()
                
                # Extract clean text
                self.text = soup.body.get_text(separator="\n", strip=True)
            else:
                raise Exception("No body tag found in the HTML")
                
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to fetch website: {str(e)}")
        except Exception as e:
            raise Exception(f"Failed to parse website: {str(e)}")
    
    def get_content_preview(self, max_chars=500):
        """
        Get a preview of the scraped content
        
        Args:
            max_chars (int): Maximum number of characters to return
            
        Returns:
            str: Preview of the content
        """
        if len(self.text) <= max_chars:
            return self.text
        return self.text[:max_chars] + "..."
