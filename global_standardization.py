import os

directory = r'C:\Sunware Revamped\main website'

targets = [
    '									<div class="footer__cta-area-right-tel-icon"><i class="flaticon-phone-call"></i></div>',
    '									<div class="footer__cta-area-right-tel-info"><span>Call Us Now</span><h6><a href="tel:+14089811878"></a></h6></div>',
    '									<div class="footer__cta-area-right-tel-icon"><i class="flaticon-phone-call"></i></div>\n',
    '									<div class="footer__cta-area-right-tel-info"><span>Call Us Now</span><h6><a href="tel:+14089811878"></a></h6></div>\n'
]

html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.html')]

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    old_content = content
    
    # 1. Standardize email
    content = content.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
    
    # 2. Remove the specific phone lines
    for target in targets:
        content = content.replace(target, '')
    
    # 3. Handle cases where the indentation might be different
    import re
    content = re.sub(r'\s*<div class="footer__cta-area-right-tel-icon">.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*<div class="footer__cta-area-right-tel-info">.*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div class="footer__cta-area-right-tel">', '', content)
    
    if content != old_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Standardized: {os.path.basename(file_path)}")
