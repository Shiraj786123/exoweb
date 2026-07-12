Add-Type -AssemblyName System.Drawing

function Make-PortraitScreen($src, $cropRatio) {
  $temp = [System.IO.Path]::ChangeExtension($src, '.tmp.png')
  $img = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap $img
  $w = $bmp.Width
  $cropH = [int][Math]::Round($bmp.Height * $cropRatio)

  $rect = New-Object System.Drawing.Rectangle 0, 0, $w, $cropH
  $cropped = $bmp.Clone($rect, $bmp.PixelFormat)

  $newW = 900
  $newH = 1950
  $final = New-Object System.Drawing.Bitmap $newW, $newH
  $g = [System.Drawing.Graphics]::FromImage($final)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear([System.Drawing.Color]::White)

  $scale = [Math]::Max($newW / $w, $newH / $cropH)
  $drawW = $w * $scale
  $drawH = $cropH * $scale
  $dx = ($newW - $drawW) / 2
  $g.DrawImage($cropped, [single]$dx, 0, [single]$drawW, [single]$drawH)

  $final.Save($temp, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $final.Dispose(); $cropped.Dispose(); $bmp.Dispose(); $img.Dispose()
  Move-Item -Force $temp $src
  Write-Output "OK $src cropRatio=$cropRatio cropH=$cropH"
}

$dir = Join-Path $PSScriptRoot '..\src\assets\mobile'
$map = @{
  'mob-app-customers.png' = 0.78
  'mob-app-business.png'  = 0.82
  'mob-app-secure.png'    = 0.88
}
foreach ($entry in $map.GetEnumerator()) {
  $path = (Resolve-Path (Join-Path $dir $entry.Key)).Path
  Make-PortraitScreen $path $entry.Value
}
