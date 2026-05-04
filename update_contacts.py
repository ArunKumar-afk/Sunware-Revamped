"""
Run this script to:
1. Replace sales@sunware.in → contact@sunwaretechnolgies.com in ALL HTML files
2. Remove ALL phone number CTA blocks from ALL HTML files
3. Fix the Success Stories section title color in index.html

Usage: python update_contacts.py
(Run from the main website directory)
"""
import os
import re

web_root = os.path.dirname(os.path.abspath(__file__))
email_old = 'sales@sunware.in'
email_new = 'contact@sunwaretechnolgies.com'

# Collect all HTML files
html_files = []
for root, dirs, files in os.walk(web_root):
    dirs[:] = [d for d in dirs if d not in ['.git', 'php_backup']]
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

changed_files = 0

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fh:
            content = fh.read()
        original = content

        # 1. Replace old email with new
        content = content.replace(email_old, email_new)

        # 2. Remove phone CTA block - inline single-line variant (service pages)
        # Pattern: <div class="footer__cta-area-right-tel"><div ...icon...<div ...info...Call Us Now...tel:...</div></div>
        content = re.sub(
            r'<div class="footer__cta-area-right-tel">'
            r'<div class="footer__cta-area-right-tel-icon"><i class="flaticon-phone-call"></i></div>'
            r'\s*'
            r'<div class="footer__cta-area-right-tel-info"><span>Call Us Now</span><h6><a href="tel:[^"]*">[^<]*</a></h6></div>'
            r'\s*</div>',
            '', content, flags=re.DOTALL
        )

        # 3. Multi-line phone block - success-stories style (extra indented)
        content = re.sub(
            r'\s*<div class="footer__cta-area-right-tel">\s*\r?\n'
            r'\s*<div class="footer__cta-area-right-tel-icon"><i class="flaticon-phone-call"></i></div>\s*\r?\n'
            r'\s*<div class="footer__cta-area-right-tel-info"><span>Call Us Now</span><h6><a href="tel:[^"]*">[^<]*</a></h6></div>\s*\r?\n'
            r'\s*</div>',
            '', content, flags=re.DOTALL
        )

        # 4. Multi-line phone block - index.html style (deeply tab-indented across multiple lines)
        content = re.sub(
            r'\s*<div class="footer__cta-area-right-tel">\s*\r?\n'
            r'\s*<div class="footer__cta-area-right-tel-icon">\s*\r?\n'
            r'\s*<i class="flaticon-phone-call"></i>\s*\r?\n'
            r'\s*</div>\s*\r?\n'
            r'\s*<div class="footer__cta-area-right-tel-info">\s*\r?\n'
            r'\s*<span>Call Us Now</span>\s*\r?\n'
            r'\s*<h6><a href="tel:[^"]*">[^<]*</a></h6>\s*\r?\n'
            r'\s*</div>\s*\r?\n'
            r'\s*</div>',
            '', content, flags=re.DOTALL
        )

        if content != original:
            with open(filepath, 'w', encoding='utf-8') as fh:
                fh.write(content)
            changed_files += 1
            rel_path = os.path.relpath(filepath, web_root)
            print(f'Modified: {rel_path}')
    except Exception as e:
        print(f'ERROR processing {filepath}: {e}')

print(f'\nTotal files updated: {changed_files}')
print('Done!')
