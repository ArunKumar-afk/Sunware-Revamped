# ============================================================
# Fix 1: Remove "Home" from nav, move "About Us" to last
# Fix 2: Add missing inline styles to about.html for footer visibility
# Fix 3: Ensure YouTube embed works on about.html
# ============================================================

$allFiles = Get-ChildItem "C:\Sunware Revamped\main website" -Filter "*.html" -Name

# ── Active nav map (which item gets orange highlight) ──
$activeNavMap = @{
    "index.html"                  = ""
    "about.html"                  = "About Us"
    "aiot-integrations.html"      = "Services"
    "automation-efficiency.html"  = "Services"
    "banking-finance.html"        = "Industries"
    "blog-details.html"           = "Blog"
    "blog-standard.html"          = "Blog"
    "blog.html"                   = "Blog"
    "careers.html"                = "Careers"
    "cloud-solutions.html"        = "Services"
    "cybersecurity-services.html" = "Services"
    "data-science-ai.html"        = "Services"
    "healthcare-lifesciences.html"= "Industries"
    "iot-innovations.html"        = "Services"
    "media-entertainment.html"    = "Industries"
    "microsoft-solutions.html"    = "Services"
    "mobile-app-development.html" = "Services"
    "odoo-solutions.html"         = "Services"
    "retail-ecommerce.html"       = "Industries"
    "salesforce-expertise.html"   = "Services"
}

# ── New nav order: Services | Industries | Careers | Blog | About Us ──
function Get-NewNav($activePage) {
    $servicesStyle = if ($activePage -eq "Services") { ' style="color:#EF7F1A"' } else { "" }
    $industriesStyle = if ($activePage -eq "Industries") { ' style="color:#EF7F1A"' } else { "" }
    $careersStyle = if ($activePage -eq "Careers") { ' style="color:#EF7F1A"' } else { "" }
    $blogStyle = if ($activePage -eq "Blog") { ' style="color:#EF7F1A"' } else { "" }
    $aboutStyle = if ($activePage -eq "About Us") { ' style="color:#EF7F1A"' } else { "" }

    return @"
<ul id="mobilemenu">
                                                                                <li class="has-dropdown"><a href="#"$servicesStyle>Services <i class="fal fa-chevron-down" style="font-size:12px;margin-left:4px;"></i></a>
                                                                                        <div class="dropdown-small dropdown-align-left" style="width: 680px;">
                                                                                                <div class="services-grid">
                                                                                                        <a href="cloud-solutions.html" class="megamenu-item"><h5>Cloud Solutions</h5><p>Hybrid cloud systems and scalability</p></a>
                                                                                                        <a href="automation-efficiency.html" class="megamenu-item"><h5>Automation</h5><p>Streamlining operations and efficiency</p></a>
                                                                                                        <a href="data-science-ai.html" class="megamenu-item"><h5>Data Science &amp; AI</h5><p>Generative AI and analytics</p></a>
                                                                                                        <a href="salesforce-expertise.html" class="megamenu-item"><h5>Salesforce</h5><p>Implementation and CRM experts</p></a>
                                                                                                        <a href="microsoft-solutions.html" class="megamenu-item"><h5>Microsoft Solutions</h5><p>Enterprise stack and Azure</p></a>
                                                                                                        <a href="iot-innovations.html" class="megamenu-item"><h5>IoT Innovations</h5><p>Connected smart device ecosystems</p></a>
                                                                                                        <a href="cybersecurity-services.html" class="megamenu-item"><h5>Cybersecurity</h5><p>Protecting your digital assets</p></a>
                                                                                                        <a href="odoo-solutions.html" class="megamenu-item"><h5>Odoo Solutions</h5><p>ERP and business automation</p></a>
                                                                                                        <a href="mobile-app-development.html" class="megamenu-item"><h5>Mobile App Development</h5><p>iOS and Android solutions</p></a>
                                                                                                        <a href="aiot-integrations.html" class="megamenu-item"><h5>AIoT Integrations</h5><p>AI-powered IoT ecosystems</p></a>
                                                                                                </div>
                                                                                        </div>
                                                                                </li>
                                                                                <li class="has-dropdown"><a href="#"$industriesStyle>Industries <i class="fal fa-chevron-down" style="font-size:12px;margin-left:4px;"></i></a>
                                                                                        <div class="dropdown-small dropdown-align-right" style="width: 550px;">
                                                                                                <div class="megamenu-left industries-grid" style="grid-template-columns: 1fr 1fr; width: 550px;">
                                                                                                        <a href="healthcare-lifesciences.html" class="megamenu-item"><h5>Healthcare &amp; Life Sciences</h5><p>Next-gen patient care and R&amp;D data</p></a>
                                                                                                        <a href="banking-finance.html" class="megamenu-item"><h5>Banking &amp; Financial Services</h5><p>Digital transformation and fintech</p></a>
                                                                                                        <a href="retail-ecommerce.html" class="megamenu-item"><h5>Retail &amp; E-commerce</h5><p>Scalable online customer journeys</p></a>
                                                                                                        <a href="media-entertainment.html" class="megamenu-item"><h5>Media &amp; Entertainment</h5><p>Interactive digital content solutions</p></a>
                                                                                                </div>
                                                                                        </div>
                                                                                </li>
                                                                                <li><a href="careers.html"$careersStyle>Careers</a></li>
                                                                                <li><a href="blog.html"$blogStyle>Blog</a></li>
                                                                                <li><a href="about.html"$aboutStyle>About Us</a></li>
                                                                        </ul>
"@
}

foreach ($f in $allFiles) {
    $path = "C:\Sunware Revamped\main website\$f"
    $c = [System.IO.File]::ReadAllText($path)
    $activePage = $activeNavMap[$f]
    if ($null -eq $activePage) { $activePage = "" }
    $newNav = Get-NewNav $activePage

    # Replace the <ul id="mobilemenu">...</ul> block
    $c = [regex]::Replace($c, '<ul id="mobilemenu">.*?</ul>', $newNav, [System.Text.RegularExpressions.RegexOptions]::Singleline)

    [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
    Write-Host "NAV UPDATED: $f (active=$activePage)"
}

Write-Host "`nAll nav menus updated."
