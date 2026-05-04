import os
import re

directory = r'C:\Sunware Revamped\main website'

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    old_content = content
    
    # 1. Standardize email
    content = content.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
    
    # 2. Remove legacy phone components aggressively
    # This pattern matches the icon div and the info div and any whitespace around them
    content = re.sub(r'\s*<div class="footer__cta-area-right-tel-icon">.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<div class="footer__cta-area-right-tel-info">.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<div class="footer__cta-area-right-tel">', '', content)
    
    # 3. Handle cases where the button is followed by multiple newlines and then a closing div
    # We want to ensure that footer__cta-area-right is closed properly.
    # Usually the structure is:
    # <div class="footer__cta-area-right ...">
    #    <a ...></a>
    #    (potential legacy junk)
    # </div>
    
    # Let's find every occurrence of footer__cta-area-right and clean up its contents
    pattern = re.compile(r'(<div class="footer__cta-area-right[^>]*>.*?</a>).*?(</div>\s*</div>\s*</div>)', re.DOTALL)
    
    def fix_cta(match):
        start_part = match.group(1)
        end_part = match.group(2)
        return f"{start_part}\n\t\t\t\t\t\t\t{end_part}"
    
    content = pattern.sub(fix_cta, content)

    if content != old_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.html')]

for f in html_files:
    if clean_file(f):
        print(f"Cleaned: {os.path.basename(f)}")
