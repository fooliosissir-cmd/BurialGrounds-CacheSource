param(
    [switch]$IncludeStuggerDownloads
)

$ErrorActionPreference = "Stop"

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
$ToolRoot = Join-Path $RepoRoot ".third-party-tools"
New-Item -ItemType Directory -Force -Path $ToolRoot | Out-Null

function Ensure-GitTool {
    param(
        [Parameter(Mandatory=$true)][string]$Name,
        [Parameter(Mandatory=$true)][string]$Url,
        [Parameter(Mandatory=$true)][string]$Commit
    )

    $Target = Join-Path $ToolRoot $Name
    if (Test-Path (Join-Path $Target ".git")) {
        Write-Host "Updating $Name..."
        git -C $Target fetch --all --tags
    } elseif (Test-Path $Target) {
        throw "$Target exists but is not a Git checkout. Move/remove it and run again."
    } else {
        Write-Host "Cloning $Name..."
        git clone $Url $Target
    }

    git -C $Target checkout --detach $Commit
    $Actual = (git -C $Target rev-parse HEAD).Trim()
    if ($Actual -ne $Commit) {
        throw "$Name checkout mismatch: expected $Commit, got $Actual"
    }
    Write-Host "$Name pinned at $Actual"
}

function Download-UpstreamArchive {
    param(
        [Parameter(Mandatory=$true)][string]$Name,
        [Parameter(Mandatory=$true)][string]$Url
    )

    $DownloadRoot = Join-Path $ToolRoot "_downloads"
    New-Item -ItemType Directory -Force -Path $DownloadRoot | Out-Null
    $Target = Join-Path $DownloadRoot $Name

    Write-Host "Downloading $Name from original upstream release..."
    Invoke-WebRequest -Uri $Url -OutFile $Target -MaximumRedirection 10
    if (-not (Test-Path $Target) -or (Get-Item $Target).Length -eq 0) {
        throw "Download failed or returned an empty file: $Target"
    }
    Write-Host "Saved $Target"
}

Ensure-GitTool -Name "RS-DataAPI" -Url "https://github.com/RuneWiki/RS-DataAPI.git" -Commit "6155e9aad21d9b58133f720fc77a55c6fef1b9c3"

if ($IncludeStuggerDownloads) {
    Download-UpstreamArchive -Name "Stugger-Map-Packer.rar" -Url "https://www.dropbox.com/scl/fi/ib2h2dtrl0pza8b9lruxm/Map-Packer.rar?rlkey=dhajyz6xr8j5c69cobh9evs3a&dl=1"
    Download-UpstreamArchive -Name "Stugger-667-Cache-Editor-opensource.rar" -Url "https://www.dropbox.com/scl/fi/25p5m915idqq3gdhgdhhb/667-Cache-Editor-opensource.rar?rlkey=d2z8psyt5nl9yltiejg3ay0w0&dl=1"
}

Write-Host ""
Write-Host "Map tooling bootstrap complete."
Write-Host "Tool root: $ToolRoot"
Write-Host "Do not point third-party packers/editors at the canonical Burial Grounds 727 cache."
