import os
import re

directory = r'C:\Sunware Revamped\main website'

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize email
        content = content.replace('sales@sunware.in', 'contact@sunwaretechnolgies.com')
        
        # Find the footer__cta-area block
        cta_start = content.find('<div class="footer__cta-area mb-60">')
        if cta_start == -1: 
            # Try alternative start
            cta_start = content.find('<div class="footer__cta-area')
            if cta_start == -1: return False
        
        # Find the site-footer start
        footer_start = content.find('<footer class="site-footer">')
        if footer_start == -1: return False
        
        # Get the title or heading from the CTA area
        h2_match = re.search(r'<h2>(.*?)</h2>', content[cta_start:footer_start])
        cta_title = h2_match.group(1) if h2_match else "Let's Get Started"
        
        # Rebuild the CTA area and the closure of main-content-wrapper
        # Note: We need to match the container structure outside the cta-area too.
        # Usually it's:
        # <div class="container">
        #   <div class="row">
        #     <div class="col-xl-12">
        #       <div class="footer__cta-area ...">
        
        # Let's find the container start before the cta_start
        container_start = content.rfind('<div class="container">', 0, cta_start)
        if container_start == -1:
            container_start = cta_start # Fallback
            
        new_cta_section = f"""<div class="container">
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
        
        # Replace from container_start to footer_start
        new_content = content[:container_start] + new_cta_section + content[footer_start:]
        
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
