import os
import re

def fix(fn):
    with open(fn, 'r', encoding='utf-8') as f: content = f.read()
    
    # 1. Update Body Tag
    content = re.sub(r'<body([^>]*)>', r'<body\1 class="data_cursor">', content)
    # Fix potential double class if it already had one
    content = content.replace('class="data_cursor" class="data_cursor"', 'class="data_cursor"')
    # If it had another class, merge it
    content = re.sub(r'class="([^"]*)" class="data_cursor"', r'class="\1 data_cursor"', content)

    # 2. Update Services Link
    # Fullscreen Nav
    content = content.replace('<li class="nav-item"><a href="services.html">Services</a></li>', '<li class="nav-item"><a href="#">Services</a></li>')
    # Megamenu and Mobile Menu
    content = content.replace('<a href="services.html">Services <i class="fal fa-chevron-down"', '<a href="#">Services <i class="fal fa-chevron-down"')
    # Fallback for simple links
    content = content.replace('<a href="services.html">Services</a>', '<a href="#">Services</a>')
    
    with open(fn, 'w', encoding='utf-8') as f: f.write(content)
    print(f"Fixed {fn}")

for f in os.listdir('.'):
    if f.endswith('.html'):
        fix(f)

# 3. Delete services.html
if os.path.exists('services.html'):
    os.remove('services.html')
    print("Deleted services.html")
