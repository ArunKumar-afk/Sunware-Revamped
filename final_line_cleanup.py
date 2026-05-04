import os

directory = r'C:\Sunware Revamped\main website'

bad_strings = [
    'footer__cta-area-right-tel-icon',
    'footer__cta-area-right-tel-info',
    'footer__cta-area-right-tel"',
    'flaticon-phone-call',
    'Call Us Now',
    'tel:+14089811878'
]

html_files = [os.path.join(directory, f) for f in os.listdir(directory) if f.endswith('.html')]

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        changed = False
        for line in lines:
            if any(bad in line for bad in bad_strings):
                changed = True
                continue
            
            # Standardize email
            if 'sales@sunware.in' in line:
                line = line.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
                changed = True
                
            new_lines.append(line)
        
        if changed:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"Fixed: {os.path.basename(file_path)}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
