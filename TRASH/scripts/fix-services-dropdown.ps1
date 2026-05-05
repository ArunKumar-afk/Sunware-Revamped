# ============================================================
# Rebuild Services dropdown with nested categories
# ============================================================

$allFiles = Get-ChildItem "C:\Sunware Revamped\main website" -Filter "*.html" -Name

# Active nav map
$activeNavMap = @{
    "index.html"=""; "about.html"="About Us"; "aiot-integrations.html"="Services"
    "automation-efficiency.html"="Services"; "banking-finance.html"="Industries"
    "blog-details.html"="Blog"; "blog-standard.html"="Blog"; "blog.html"="Blog"
    "careers.html"="Careers"; "cloud-solutions.html"="Services"
    "cybersecurity-services.html"="Services"; "data-science-ai.html"="Services"
    "healthcare-lifesciences.html"="Industries"; "iot-innovations.html"="Services"
    "media-entertainment.html"="Industries"; "microsoft-solutions.html"="Services"
    "mobile-app-development.html"="Services"; "odoo-solutions.html"="Services"
    "retail-ecommerce.html"="Industries"; "salesforce-expertise.html"="Services"
}

# New services dropdown HTML with nested categories
$servicesDropdownHTML = @'
<div class="dropdown-small dropdown-align-left" style="width: 780px; padding: 30px;">
                                                                                                <div class="services-categories">
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Solution Engineering &amp; Development</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="data-science-ai.html" class="megamenu-item-nested">Data Analytics</a>
                                                                                                                        <a href="automation-efficiency.html" class="megamenu-item-nested">Enterprise Application Development</a>
                                                                                                                        <a href="cloud-solutions.html" class="megamenu-item-nested">Infrastructure</a>
                                                                                                                        <a href="cloud-solutions.html" class="megamenu-item-nested">Cloud Services</a>
                                                                                                                        <a href="iot-innovations.html" class="megamenu-item-nested">IOT Solutions</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Strategy &amp; Transformation</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="salesforce-expertise.html" class="megamenu-item-nested">Technology Consulting</a>
                                                                                                                        <a href="microsoft-solutions.html" class="megamenu-item-nested">Digital Transformation</a>
                                                                                                                        <a href="aiot-integrations.html" class="megamenu-item-nested">AI Enablement</a>
                                                                                                                        <a href="data-science-ai.html" class="megamenu-item-nested">Data Engineering</a>
                                                                                                                        <a href="cybersecurity-services.html" class="megamenu-item-nested">XR Solutions</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Operational Support &amp; Expansion</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="odoo-solutions.html" class="megamenu-item-nested">Staff Augmentation Solution</a>
                                                                                                                        <a href="cybersecurity-services.html" class="megamenu-item-nested">Maintenance and Support</a>
                                                                                                                        <a href="mobile-app-development.html" class="megamenu-item-nested">Learning Platform</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
'@

foreach ($f in $allFiles) {
    $path = "C:\Sunware Revamped\main website\$f"
    $c = [System.IO.File]::ReadAllText($path)

    # Replace the old services dropdown (from <div class="dropdown-small dropdown-align-left" to its closing </div></li>)
    $newC = [regex]::Replace($c,
        '<div class="dropdown-small dropdown-align-left"[^>]*>\s*<div class="services-grid">.*?</div>\s*</div>\s*</li>',
        ($servicesDropdownHTML + "`n                                                                                </li>"),
        [System.Text.RegularExpressions.RegexOptions]::Singleline)

    if ($newC -ne $c) {
        [System.IO.File]::WriteAllText($path, $newC, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $f"
    } else {
        Write-Host "SKIP (no match): $f"
    }
}

Write-Host "`nDone."
