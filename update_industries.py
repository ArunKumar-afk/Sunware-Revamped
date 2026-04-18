import os
import glob
import re

directory = r"C:\Sunware Revamped\main website\**\*.html"
files = glob.glob(directory, recursive=True)

new_desktop_megamenu = '''									<li class="has-megamenu"><a href="#">Industries <i class="fal fa-chevron-down" style="font-size:12px;margin-left:4px;"></i></a>
										<div class="megamenu">
											<div class="megamenu-content">
												<div class="megamenu-left">
													<a href="healthcare-lifesciences.html" class="megamenu-item"><h5>Healthcare & Life Sciences</h5><p>Next-gen patient care and R&D data</p></a>
													<a href="banking-finance.html" class="megamenu-item"><h5>Banking & Financial Services</h5><p>Digital transformation and fintech</p></a>
													<a href="retail-ecommerce.html" class="megamenu-item"><h5>Retail & E-commerce</h5><p>Scalable online customer journeys</p></a>
													<a href="media-entertainment.html" class="megamenu-item"><h5>Media & Entertainment</h5><p>Interactive digital content solutions</p></a>
												</div>
											</div>
										</div>
									</li>'''

import collections
updated_files = []

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        original_content = content
        
        # Replace the simple list item for Industries
        content = re.sub(r'<li>\s*<a href="healthcare-lifesciences\.html">Industries</a>\s*</li>', new_desktop_megamenu, content)
        
        if content != original_content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            updated_files.append(f)
            
    except Exception as e:
        print(f"Error reading {f}: {e}")

print(f"Successfully updated industries megamenu in {len(updated_files)} files.")
for f in updated_files:
    print(f" - {os.path.basename(f)}")
