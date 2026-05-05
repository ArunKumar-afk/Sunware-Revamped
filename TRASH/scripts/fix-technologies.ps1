# ============================================================
# 1. Add "Technologies" nav item with nested dropdown to all pages
# 2. Add Technologies slideshow section to index.html
# ============================================================

$allFiles = Get-ChildItem "C:\Sunware Revamped\main website" -Filter "*.html" -Name

# ── Technologies dropdown HTML ──
$techDropdown = @'
                                                                                <li class="has-dropdown"><a href="#">Technologies <i class="fal fa-chevron-down" style="font-size:12px;margin-left:4px;"></i></a>
                                                                                        <div class="dropdown-small dropdown-align-left" style="width: 780px; padding: 30px;">
                                                                                                <div class="services-categories">
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Core Business Solutions</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="cloud-solutions.html" class="megamenu-item-nested">Cloud Solutions Expertise</a>
                                                                                                                        <a href="automation-efficiency.html" class="megamenu-item-nested">Automation and Efficiency</a>
                                                                                                                        <a href="data-science-ai.html" class="megamenu-item-nested">Data Science and Artificial Intelligence</a>
                                                                                                                        <a href="mobile-app-development.html" class="megamenu-item-nested">Mobile Application Development</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Specialized Technology Solutions</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="data-science-ai.html" class="megamenu-item-nested">Graph Technologies: Neo4J</a>
                                                                                                                        <a href="salesforce-expertise.html" class="megamenu-item-nested">CRM: Salesforce Implementation &amp; Customization</a>
                                                                                                                        <a href="odoo-solutions.html" class="megamenu-item-nested">ERP: Odoo Custom Solutions</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div class="services-category">
                                                                                                                <div class="services-category-title">Frontier/Emerging Technologies</div>
                                                                                                                <div class="services-category-items">
                                                                                                                        <a href="aiot-integrations.html" class="megamenu-item-nested">AIoT Integrations</a>
                                                                                                                        <a href="iot-innovations.html" class="megamenu-item-nested">IoT Innovations</a>
                                                                                                                        <a href="cybersecurity-services.html" class="megamenu-item-nested">Cybersecurity Services</a>
                                                                                                                        <a href="microsoft-solutions.html" class="megamenu-item-nested">Microsoft &amp; Azure Solutions</a>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </li>
'@

# ── Insert Technologies after Industries in nav on all pages ──
foreach ($f in $allFiles) {
    $path = "C:\Sunware Revamped\main website\$f"
    $c = [System.IO.File]::ReadAllText($path)

    # Check if Technologies already exists
    if ($c.Contains('>Technologies <')) {
        Write-Host "SKIP (already has Technologies): $f"
        continue
    }

    # Insert after the Industries </li> closing
    # Pattern: the Industries dropdown ends with </div></li> then <li><a href="careers.html"
    $newC = [regex]::Replace($c,
        '(</div>\s*</li>\s*)(                                                                                <li><a href="careers\.html")',
        ('$1' + $techDropdown + "`n" + '$2'),
        [System.Text.RegularExpressions.RegexOptions]::Singleline)

    if ($newC -ne $c) {
        [System.IO.File]::WriteAllText($path, $newC, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $f"
    } else {
        Write-Host "NO MATCH: $f"
    }
}

Write-Host "`nNav update done."
