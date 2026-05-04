import os
import re

directory = r'C:\Sunware Revamped\main website'

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize email
        content = content.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
        
        # 1. Identify the CTA area heading
        # Look for the footer__cta-area-left and its h2
        h2_match = re.search(r'class="footer__cta-area-left[^>]*>.*?<h2>(.*?)</h2>', content, re.DOTALL)
        if not h2_match:
            # Try a broader search for any h2 in a cta area
            h2_match = re.search(r'class="footer__cta-area[^>]*>.*?<h2>(.*?)</h2>', content, re.DOTALL)
            
        cta_title = h2_match.group(1).strip() if h2_match else "Let's Get Started"
        
        # 2. Identify the section to replace
        # We want to replace the entire <div class="container"> that contains the footer__cta-area
        # Find footer__cta-area first
        cta_index = content.find('footer__cta-area')
        if cta_index == -1: return False
        
        # Find the container start before it
        container_start = content.rfind('<div class="container">', 0, cta_index)
        if container_start == -1: return False
        
        # Find the site-footer start
        footer_start = content.find('<footer class="site-footer">')
        if footer_start == -1: return False
        
        # 3. Build the clean section
        # We need to close the main-content-wrapper too if it's open.
        # Usually there are 4 closing divs after the cta-area-right to close:
        # footer__cta-area-right, row, footer__cta-area, col-xl-12, row, container, main-content-wrapper?
        # Let's count the divs in a known good file or just use the structure I want.
        
        clean_section = f"""<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="footer__cta-area mb-60">
					<div class="row al-center">
						<div class="col-xl-6 col-lg-7 lg-mb-40">
							<div class="footer__cta-area-left lg-t-center">
								<h2>{cta_title}</h2>
							</div>
						</div>
						<div class="col-xl-6 col-lg-5">
							<div class="footer__cta-area-right d-flex al-center flex-wrap jc-end lg-jc-center gap-25">
								<a class="default_button" href="#" onclick="openEnquireModal(event)">Start Today<i class="flaticon-right-up"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><!-- Main content wrapper end -->\n\n"""

        new_content = content[:container_start] + clean_section + content[footer_start:]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

# Apply to all relevant files
files_to_fix = [
    'xr-solutions.html',
    'technology-consulting.html',
    'staff-augmentation.html',
    'odoo-solutions.html',
    'neo4j-solutions.html',
    'microsoft-solutions.html',
    'maintenance-support.html',
    'infrastructure.html',
    'enterprise-app-development.html',
    'digital-transformation.html',
    'data-engineering.html',
    'data-analytics.html',
    'cybersecurity-services.html',
    'automation-efficiency.html',
    'aiot-integrations.html'
]

for f in files_to_fix:
    path = os.path.join(directory, f)
    if os.path.exists(path):
        if fix_file(path):
            print(f"Fixed: {f}")
        else:
            print(f"Skipped: {f}")
