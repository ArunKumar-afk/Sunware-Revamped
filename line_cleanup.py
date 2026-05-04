import os

directory = r'C:\Sunware Revamped\main website'
success_stories_dir = os.path.join(directory, 'success-stories')

html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.html')]
if os.path.exists(success_stories_dir):
    html_files += [os.path.join(success_stories_dir, f) for f in os.listdir(success_stories_dir) if f.endswith('.html')]

bad_strings = [
    'footer__cta-area-right-tel',
    'flaticon-phone-call',
    'Call Us Now'
]

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    skip_next_div = False
    changed = False
    
    for line in lines:
        if any(bad in line for bad in bad_strings):
            changed = True
            if 'footer__cta-area-right-tel-info' in line or 'footer__cta-area-right-tel"' in line:
                 # If it's the info line or the start of the tel div, we might need to skip the closing div
                 # But in many files, the tel div start was already removed or is on the same line as the icon.
                 # Let's just skip this line.
                 pass
            
            # Special case: if we see the info line, the next </div> might be the closing for the tel block
            if 'footer__cta-area-right-tel-info' in line:
                skip_next_div = True
            continue
        
        if skip_next_div and '</div>' in line:
            skip_next_div = False
            changed = True
            continue
            
        # Standardize email while we're at it
        if 'sales@sunware.in' in line:
            line = line.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
            changed = True
            
        new_lines.append(line)
    
    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Cleaned: {os.path.basename(file_path)}")
