$files = Get-ChildItem -Path "C:\Sunware Revamped\main website\*.html", "C:\Sunware Revamped\main website\success-stories\*.html"

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $changed = $false
    
    # 1. Replace email
    if ($content -match 'sales@sunware\.in') {
        $content = $content -replace 'sales@sunware\.in', 'contact@sunwaretechnolgies.com'
        $changed = $true
    }
    
    # 2. Remove phone CTA block components
    # We remove the icon, info, and the start/end tags if they exist
    $oldContent = $content
    
    $content = $content -replace '<div class="footer__cta-area-right-tel">', ''
    $content = $content -replace '<div class="footer__cta-area-right-tel-icon">.*?</div>', ''
    $content = $content -replace '<div class="footer__cta-area-right-tel-info">.*?</div>', ''
    
    # This is tricky because the closing div might be followed by other divs.
    # But in the CTA block, the structure is usually:
    # <div class="footer__cta-area-right ...">
    #   <a ...></a>
    #   <div class="footer__cta-area-right-tel">
    #     ...
    #   </div>
    # </div>
    
    # So we look for the specific pattern of the tel block closing.
    # Often it's just a </div> on its own line after the info div.
    
    # Let's use a regex that matches the whole block if possible, but more flexibly.
    $content = [regex]::Replace($content, '(?s)<div class="footer__cta-area-right-tel">.*?</div>\s*</div>', "</div>")
    # Actually, that might remove the parent closing tag.
    
    # Let's try this:
    # Match the tel-icon/tel-info and the closing tag that immediately follows.
    $content = [regex]::Replace($content, '(?s)<div class="footer__cta-area-right-tel-icon">.*?</div>\s*<div class="footer__cta-area-right-tel-info">.*?</div>\s*</div>', "")
    
    if ($content -ne $oldContent) { $changed = $true }

    if ($changed) {
        # Clean up empty lines
        $content = $content -replace '(?m)^\s*$\n', ""
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $($file.Name)"
    }
}
