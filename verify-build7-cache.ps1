param(
    [string]$ServerPath = ""
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$Tree = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Tree

Write-Host ""
Write-Host "===================================================" -ForegroundColor DarkYellow
Write-Host " Burial Grounds Cache UI Build 7 Verification" -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor DarkYellow
Write-Host ""

if ([string]::IsNullOrWhiteSpace($ServerPath)) {
    $candidates = @(
        (Join-Path (Split-Path -Parent $Tree) "BurialGrounds-Server"),
        (Join-Path (Split-Path -Parent $Tree) "Server"),
        "C:\DarkanDev\Server"
    )
    foreach ($candidate in $candidates) {
        if (Test-Path (Join-Path $candidate "gradlew.bat")) {
            $ServerPath = $candidate
            break
        }
    }
}

if ([string]::IsNullOrWhiteSpace($ServerPath)) {
    throw "Could not locate BurialGrounds-Server. Pass -ServerPath <path-to-server-repo>."
}

$ServerPath = (Resolve-Path $ServerPath).Path
$Gradle = Join-Path $ServerPath "gradlew.bat"
if (-not (Test-Path $Gradle)) {
    throw "gradlew.bat was not found under $ServerPath"
}

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("burialgrounds-build7-cache-" + $PID)
if (Test-Path $tempRoot) {
    Remove-Item $tempRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $tempRoot | Out-Null

try {
    Write-Host "[1/3] Validating editable cache-source status..." -ForegroundColor Cyan
    Push-Location $ServerPath
    & $Gradle :tools:run "--args=cache status `"$Tree`""
    if ($LASTEXITCODE -ne 0) {
        throw "cache status failed."
    }

    Write-Host ""
    Write-Host "[2/3] Packing cache source to temporary output..." -ForegroundColor Cyan
    Write-Host "      This compiles every CS2 script without touching the live cache." -ForegroundColor DarkGray
    & $Gradle :tools:run "--args=cache build `"$Tree`" `"$tempRoot`""
    if ($LASTEXITCODE -ne 0) {
        throw "Temporary cache build failed. Fix the reported cache/CS2 error before release."
    }
    Pop-Location

    Write-Host ""
    Write-Host "[3/3] Verifying Build 7 UI source files are present..." -ForegroundColor Cyan

    $required = @(
        "clientscripts\proc\loginscreen_load.ts",
        "clientscripts\proc\lobby_resize.ts",
        "clientscripts\proc\lobby_message_of_the_week.ts",
        "clientscripts\proc\lobbyscreen_entergame.ts",
        "clientscripts\clientscript\lobby_worldswitcher_timer.ts",
        "loading_screens\0.json",
        "loading_screens\2.json"
    )

    foreach ($relative in $required) {
        if (-not (Test-Path (Join-Path $Tree $relative))) {
            throw "Required Build 7 source file is missing: $relative"
        }
    }

    Write-Host ""
    Write-Host "CACHE UI BUILD 7 COMPILED SUCCESSFULLY" -ForegroundColor Green
    Write-Host "Temporary packed cache: $tempRoot" -ForegroundColor DarkGray
    Write-Host "The temporary output will now be removed." -ForegroundColor DarkGray
}
finally {
    if ((Get-Location).Path -eq $ServerPath) {
        Pop-Location
    }
    if (Test-Path $tempRoot) {
        Remove-Item $tempRoot -Recurse -Force
    }
}
