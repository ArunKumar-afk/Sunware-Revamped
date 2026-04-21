# ============================================================
# Sunware Technologies - Header & Footer Consistency Fix
# Standardizes header and footer across all HTML pages
# ============================================================

$files = @(
    "index.html","about.html","aiot-integrations.html","automation-efficiency.html",
    "banking-finance.html","blog-details.html","blog-standard.html","blog.html",
    "careers.html","cloud-solutions.html","cybersecurity-services.html",
    "data-science-ai.html","healthcare-lifesciences.html","iot-innovations.html",
    "media-entertainment.html","microsoft-solutions.html","mobile-app-development.html",
    "odoo-solutions.html","retail-ecommerce.html","salesforce-expertise.html"
)

# ── Active nav link map (which nav item gets the orange highlight per page) ──
$activeNavMap = @{
    "index.html"                  = "Home"
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

# ── Build canonical header HTML (active nav injected per page) ──
function Get-CanonicalHeader($activePage) {
    $navItems = @(
        @{ label="Home";       href="index.html" },
        @{ label="About Us";   href="about.html" },
        @{ label="Careers";    href="careers.html" },
        @{ label="Blog";       href="blog.html" }
    )

    $navHtml = ""
    foreach ($item in $navItems) {
        if ($item.label -eq "Services" -or $item.label -eq "Industries") { continue }
        $style = if ($item.label -eq $activePage) { ' style="color:#EF7F1A"' } else { "" }
        $navHtml += "                                                                <li><a href=`"$($item.href)`"$style>$($item.label)</a></li>`n"
    }

    # Services active style
    $servicesStyle = if ($activePage -eq "Services") { ' style="color:#EF7F1A"' } else { "" }
    # Industries active style
    $industriesStyle = if ($activePage -eq "Industries") { ' style="color:#EF7F1A"' } else { "" }

    return @"
<header class="header__area">
                        <div class="container">
                                <div class="row">
                                        <div class="col-xl-12">
                                                <div class="header__area-menubar">
                                                        <div class="header__area-menubar-left one"><a href="index.html"><img src="main logo.png" alt="Sunware Technologies" style="height:45px;"></a></div>
                                                        <div class="header__area-menubar-center">
                                                                <div class="header__area-menubar-center-menu">
                                                                        <ul id="mobilemenu">
                                                                                <li><a href="index.html"$(if ($activePage -eq "Home") { ' style="color:#EF7F1A"' })>Home</a></li>
                                                                                <li><a href="about.html"$(if ($activePage -eq "About Us") { ' style="color:#EF7F1A"' })>About Us</a></li>
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
                                                                                <li><a href="careers.html"$(if ($activePage -eq "Careers") { ' style="color:#EF7F1A"' })>Careers</a></li>
                                                                                <li><a href="blog.html"$(if ($activePage -eq "Blog") { ' style="color:#EF7F1A"' })>Blog</a></li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                        <div class="header__area-menubar-right">
                                                                <div class="header__area-menubar-right-tel lg-display-n"><a class="default_button" href="#" onclick="openEnquireModal(event)">Enquire Now<i class="flaticon-right-up"></i></a></div>
                                                                <button class="menu js-menu"><span></span><span></span><span></span></button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </header>
"@
}

# ── Canonical footer HTML ──
$canonicalFooter = @'
<footer class="site-footer">
        <div class="footer__one" style="padding: 15px 0; background-color: #0a0f1e;">
                <div class="bg_shape" style="background-image: url('assets/img/shape/footer.png');"></div>
                <div class="container">
                        <div class="row">
                                <div class="col-lg-3 col-sm-6">
                                        <div class="footer__one-widget">
                                                <a class="logo" href="index.html"><img src="white Logo.png" alt="Sunware Technologies"></a>
                                                <p style="font-style: italic; color: #EF7F1A; margin: 15px 0 4px 0; font-size: 14px; font-weight: 500;">Advanced Data &amp; AI Solutions Tailored to Your Needs.</p>
                                        </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 sm-mt-30">
                                        <div class="footer__one-widget ml-40 xl-ml-0">
                                                <h5>Quick links</h5>
                                                <div class="footer-widget-menu">
                                                        <ul>
                                                                <li><a href="index.html">Home</a></li>
                                                                <li><a href="about.html">About Us</a></li>
                                                                <li><a href="#">Services</a></li>
                                                                <li><a href="careers.html">Careers</a></li>
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="mailto:sales@sunware.in">Contact Us</a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 lg-mt-30">
                                        <div class="footer__one-widget contact ml-40 xl-ml-0">
                                                <h5>Contact</h5>
                                                <div class="contact-item mb-15">
                                                        <div class="contact-item-icon"><i class="flaticon-email"></i></div>
                                                        <div class="contact-item-info"><span>Email</span><h6><a href="mailto:sales@sunware.in">sales@sunware.in</a></h6></div>
                                                </div>
                                        </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 lg-mt-30">
                                        <div class="footer__one-widget social">
                                                <h5>Social Media</h5>
                                                <p>Stay connected with us</p>
                                                <ul>
                                                        <li><a href="https://www.linkedin.com/company/sunware-technologies" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                                        <li><a href="https://www.youtube.com/@sunwaretechnologies" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a href="https://www.instagram.com/sunwaretechnologies" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</footer>
'@

# ── Canonical nav overlay HTML ──
$canonicalNavOverlay = @'
<div class="js-nav">
        <div class="nav-brand"><a href="index.html"><img src="white Logo.png" alt="Sunware Technologies"></a></div>
        <ul>
                <li class="nav-item"><a href="index.html">Home</a></li>
                <li class="nav-item"><a href="about.html">About Us</a></li>
                <li class="nav-item"><a href="blog.html">Blog</a></li>
                <li class="nav-item"><a href="careers.html">Careers</a></li>
                <li class="nav-item"><a href="mailto:sales@sunware.in">Contact</a></li>
        </ul>
        <div class="nav-footer">
                <div class="nav-footer-social">
                        <a href="https://www.linkedin.com/company/sunware-technologies" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@sunwaretechnologies" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/sunwaretechnologies" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <a class="default_button" href="#" onclick="openEnquireModal(event)">Enquire Now <i class="flaticon-right-up"></i></a>
        </div>
</div>
'@

# ── Process each file ──
$updated = 0
$skipped = 0

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        Write-Host "SKIP (not found): $file"
        $skipped++
        continue
    }

    $content = Get-Content $file -Raw -Encoding UTF8
    $activePage = $activeNavMap[$file]
    $canonicalHeader = Get-CanonicalHeader $activePage
    $changed = $false

    # ── 1. Replace footer ──
    $footerStart = $content.IndexOf('<footer class="site-footer">')
    $footerEnd = $content.LastIndexOf('</footer>') + 9
    if ($footerStart -ge 0 -and $footerEnd -gt $footerStart) {
        $oldFooter = $content.Substring($footerStart, $footerEnd - $footerStart)
        if ($oldFooter -ne $canonicalFooter) {
            $content = $content.Substring(0, $footerStart) + $canonicalFooter + $content.Substring($footerEnd)
            $changed = $true
        }
    }

    # ── 2. Replace header tag ──
    $headerStart = $content.IndexOf('<header class="header__area">')
    $headerEnd = $content.IndexOf('</header>') + 9
    if ($headerStart -ge 0 -and $headerEnd -gt $headerStart) {
        $oldHeader = $content.Substring($headerStart, $headerEnd - $headerStart)
        if ($oldHeader -ne $canonicalHeader) {
            $content = $content.Substring(0, $headerStart) + $canonicalHeader + $content.Substring($headerEnd)
            $changed = $true
        }
    }

    # ── 3. Replace div-based header (index.html, blog-standard.html) ──
    $divHeaderStart = $content.IndexOf('<div class="header__area">')
    if ($divHeaderStart -ge 0) {
        # Find the closing </div> that matches - count depth
        $depth = 0
        $pos = $divHeaderStart
        $divHeaderEnd = -1
        while ($pos -lt $content.Length - 5) {
            if ($content.Substring($pos, [Math]::Min(5, $content.Length - $pos)) -match '^<div') {
                $depth++
                $pos += 4
            } elseif ($content.Substring($pos, [Math]::Min(6, $content.Length - $pos)) -match '^</div') {
                $depth--
                if ($depth -eq 0) {
                    $divHeaderEnd = $pos + 6
                    break
                }
                $pos += 6
            } else {
                $pos++
            }
        }
        if ($divHeaderEnd -gt 0) {
            $content = $content.Substring(0, $divHeaderStart) + $canonicalHeader + $content.Substring($divHeaderEnd)
            $changed = $true
        }
    }

    # ── 4. Replace nav overlay ──
    $navStart = $content.IndexOf('<div class="js-nav">')
    if ($navStart -ge 0) {
        # Find closing </div> for js-nav
        $depth = 0
        $pos = $navStart
        $navEnd = -1
        while ($pos -lt $content.Length - 5) {
            $chunk5 = $content.Substring($pos, [Math]::Min(5, $content.Length - $pos))
            $chunk6 = $content.Substring($pos, [Math]::Min(6, $content.Length - $pos))
            if ($chunk5 -match '^<div[> ]') {
                $depth++
                $pos += 4
            } elseif ($chunk6 -match '^</div') {
                $depth--
                if ($depth -eq 0) {
                    $navEnd = $pos + 6
                    break
                }
                $pos += 6
            } else {
                $pos++
            }
        }
        if ($navEnd -gt 0) {
            $oldNav = $content.Substring($navStart, $navEnd - $navStart)
            if ($oldNav -ne $canonicalNavOverlay) {
                $content = $content.Substring(0, $navStart) + $canonicalNavOverlay + $content.Substring($navEnd)
                $changed = $true
            }
        }
    }

    if ($changed) {
        [System.IO.File]::WriteAllText((Resolve-Path $file).Path, $content, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $file (active=$activePage)"
        $updated++
    } else {
        Write-Host "OK (no change): $file"
    }
}

Write-Host ""
Write-Host "Done. Updated: $updated | Skipped: $skipped | Total: $($files.Count)"
