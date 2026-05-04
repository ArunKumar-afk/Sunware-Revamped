
$oldEmails = @("sales@sunware.in", "support@name.com")
$newEmail = "contact@sunwaretechnolgies.com"

$files = Get-ChildItem -Path . -Filter *.html -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content

    # Replace emails
    foreach ($oldEmail in $oldEmails) {
        $content = $content.Replace($oldEmail, $newEmail)
    }

    # Remove phone contact blocks in footer/sidebar
    # Pattern 1: Standard contact item with phone
    $content = [regex]::Replace($content, '(?s)<div class="contact-item[^"]*">.*?<i class="flaticon-phone[^"]*">.*?</div>\s*</div>', "")
    
    # Pattern 2: CTA phone block
    $content = [regex]::Replace($content, '(?s)<div class="footer__cta-area-right-tel">.*?</div>\s*</div>', "")

    # Pattern 3: Any remaining tel: links in <h6>
    $content = [regex]::Replace($content, '(?s)<h6><a href="tel:[^"]*">.*?</a></h6>', "")

    if ($content -ne $original) {
        Set-Content $file.FullName $content
        Write-Host "Updated: $($file.Name)"
    }
}
