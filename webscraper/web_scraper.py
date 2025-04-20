import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import os
import time
from urllib.parse import urljoin, urlparse
from typing import List, Dict, Optional
import random
import hashlib
from pathlib import Path

class WebScraper:
    def __init__(self, base_url: str, max_pages: int = 5, delay: float = 1.0):
        """
        Initialize the web scraper with configuration options.
        
        Args:
            base_url (str): The starting URL to scrape
            max_pages (int): Maximum number of pages to scrape
            delay (float): Delay between requests in seconds
        """
        self.base_url = base_url
        self.max_pages = max_pages
        self.delay = delay
        self.visited_urls = set()
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.image_count = 0
        
    def is_valid_url(self, url: str) -> bool:
        """Check if a URL is valid and belongs to the same domain."""
        try:
            base_domain = urlparse(self.base_url).netloc
            url_domain = urlparse(url).netloc
            return url_domain == base_domain
        except:
            return False

    def get_page(self, url: str, max_retries: int = 3) -> Optional[requests.Response]:
        """Fetch a page with retry logic and rate limiting."""
        for attempt in range(max_retries):
            try:
                # Add random delay to avoid being blocked
                time.sleep(self.delay + random.uniform(0, 1))
                response = requests.get(url, headers=self.headers, timeout=10)
                response.raise_for_status()
                return response
            except requests.exceptions.RequestException as e:
                if attempt == max_retries - 1:
                    print(f"Failed to fetch {url} after {max_retries} attempts: {e}")
                    return None
                time.sleep(2 ** attempt)  # Exponential backoff

    def download_image(self, img_url: str, base_url: str) -> Optional[Dict]:
        """Download and save an image from the given URL."""
        if not img_url:
            return None
            
        # Convert relative URLs to absolute URLs
        if not img_url.startswith(('http://', 'https://')):
            img_url = urljoin(base_url, img_url)
            
        try:
            # Create images directory if it doesn't exist
            img_dir = os.path.join('scraped_data', 'images')
            os.makedirs(img_dir, exist_ok=True)
            
            # Get the original filename from the URL
            original_filename = os.path.basename(urlparse(img_url).path)
            
            # If no filename in URL or it's invalid, create a hash-based one
            if not original_filename or original_filename.startswith('.'):
                url_hash = hashlib.md5(img_url.encode()).hexdigest()[:8]
                ext = Path(urlparse(img_url).path).suffix or '.jpg'
                original_filename = f"image_{url_hash}{ext}"
            
            # Handle duplicate filenames by adding a number if necessary
            base_name, ext = os.path.splitext(original_filename)
            counter = 1
            filename = original_filename
            while os.path.exists(os.path.join(img_dir, filename)):
                filename = f"{base_name}_{counter}{ext}"
                counter += 1
            
            filepath = os.path.join(img_dir, filename)
            
            # Download the image
            response = requests.get(img_url, headers=self.headers, timeout=10)
            response.raise_for_status()
            
            # Save the image
            with open(filepath, 'wb') as f:
                f.write(response.content)
                
            self.image_count += 1
            
            return {
                'original_url': img_url,
                'original_filename': original_filename,
                'saved_filename': filename,
                'saved_path': filepath,
                'size_bytes': len(response.content)
            }
            
        except Exception as e:
            print(f"Failed to download image {img_url}: {e}")
            return None

    def extract_links(self, soup: BeautifulSoup, base_url: str) -> List[str]:
        """Extract all valid links from a page."""
        links = []
        for link in soup.find_all('a'):
            href = link.get('href')
            if href:
                absolute_url = urljoin(base_url, href)
                if self.is_valid_url(absolute_url) and absolute_url not in self.visited_urls:
                    links.append(absolute_url)
        return links

    def scrape_page(self, url: str) -> Dict:
        """Scrape a single page and return structured data."""
        response = self.get_page(url)
        if not response:
            return None

        soup = BeautifulSoup(response.text, 'html.parser')
        self.visited_urls.add(url)
        
        # Extract and download images
        images_data = []
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                img_data = self.download_image(src, url)
                if img_data:
                    images_data.append({
                        'src': src,
                        'alt': img.get('alt'),
                        'download_info': img_data
                    })
        
        return {
            'url': url,
            'title': soup.title.string if soup.title else 'No title found',
            'text_content': soup.get_text(separator='\n', strip=True),
            'links': [{'text': link.text, 'href': link.get('href')} for link in soup.find_all('a')],
            'images': images_data,
            'metadata': {
                meta.get('name', meta.get('property')): meta.get('content')
                for meta in soup.find_all('meta')
                if meta.get('name') or meta.get('property')
            },
            'raw_html': response.text
        }

    def save_data(self, data: Dict, timestamp: str):
        """Save scraped data to files."""
        if not os.path.exists('scraped_data'):
            os.makedirs('scraped_data')
            
        # Save raw HTML
        with open(f'scraped_data/raw_html_{timestamp}.html', 'w', encoding='utf-8') as f:
            f.write(data.get('raw_html', ''))
        
        # Save structured data as JSON
        with open(f'scraped_data/structured_data_{timestamp}.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        
        # Save text content separately
        with open(f'scraped_data/text_content_{timestamp}.txt', 'w', encoding='utf-8') as f:
            f.write(data['text_content'])
            
        # Save image report
        with open(f'scraped_data/image_report_{timestamp}.txt', 'w', encoding='utf-8') as f:
            f.write(f"Total images downloaded: {self.image_count}\n\n")
            for img in data['images']:
                f.write(f"Original URL: {img['src']}\n")
                if img.get('download_info'):
                    f.write(f"Original filename: {img['download_info']['original_filename']}\n")
                    f.write(f"Saved as: {img['download_info']['saved_filename']}\n")
                    f.write(f"Path: {img['download_info']['saved_path']}\n")
                    f.write(f"Size: {img['download_info']['size_bytes']} bytes\n")
                f.write(f"Alt text: {img.get('alt', 'N/A')}\n\n")

    def scrape(self) -> List[Dict]:
        """Main scraping function that handles multiple pages."""
        pages_to_visit = [self.base_url]
        scraped_data = []
        
        while pages_to_visit and len(scraped_data) < self.max_pages:
            current_url = pages_to_visit.pop(0)
            
            if current_url in self.visited_urls:
                continue
                
            print(f"Scraping: {current_url}")
            data = self.scrape_page(current_url)
            
            if data:
                timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
                self.save_data(data, timestamp)
                scraped_data.append(data)
                
                # Add new links to the queue
                new_links = self.extract_links(BeautifulSoup(data.get('raw_html', ''), 'html.parser'), current_url)
                pages_to_visit.extend(new_links)
                
            print(f"Images downloaded so far: {self.image_count}")
        
        return scraped_data

def main():
    url = input("Enter the URL to scrape: ")
    max_pages = int(input("Enter maximum number of pages to scrape (default 5): ") or "5")
    delay = float(input("Enter delay between requests in seconds (default 1.0): ") or "1.0")
    
    scraper = WebScraper(url, max_pages, delay)
    results = scraper.scrape()
    
    print("\nScraping Summary:")
    print(f"Total pages scraped: {len(results)}")
    print(f"Total unique URLs visited: {len(scraper.visited_urls)}")
    print(f"Total images downloaded: {scraper.image_count}")
    print("Files saved in 'scraped_data' directory")

if __name__ == "__main__":
    main() 