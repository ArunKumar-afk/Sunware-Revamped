import os
import re

directory = r'C:\Sunware Revamped\main website'
success_stories_dir = os.path.join(directory, 'success-stories')

html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.html')]
if os.path.exists(success_stories_dir):
    html_files += [os.path.join(success_stories_dir, f) for f in os.listdir(success_stories_dir) if f.endswith('.html')]

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    old_content = content
    
    # 1. Standardize email
    content = content.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
    
    # 2. Fix the broken footer__cta-area-right block
    # We want to keep everything from the start of the div until the first </a>, then close it cleanly.
    
    pattern = re.compile(r'(<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">.*?</a>).*?(</div>\s*</div>\s*</div>)', re.DOTALL)
    
    def replacement(match):
        button_part = match.group(1)
        closing_part = match.group(2)
        return f"{button_part}\n\t\t\t\t\t\t\t{closing_part}"
    
    content = pattern.sub(replacement, content)
    
    # Handle cases where the start tag might be slightly different or there are multiple buttons
    # But for now, let's just ensure we remove the tel components if they are still there
    content = re.sub(r'<div class="footer__cta-area-right-tel">', '', content)
    content = re.sub(r'<div class="footer__cta-area-right-tel-icon">.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="footer__cta-area-right-tel-info">.*?</div>', '', content, flags=re.DOTALL)
    
    # Clean up excessive empty lines
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    
    if content != old_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {os.path.basename(file_path)}")
