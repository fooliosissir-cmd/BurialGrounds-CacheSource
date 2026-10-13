# Burial Grounds map / cache conversion tool bundle

This folder makes the external tools used for 667/718 -> 727 map research reproducible from the Burial Grounds repository.

## What is actually available

### RS-DataAPI — enabled
- Source: https://github.com/RuneWiki/RS-DataAPI
- Pinned commit: `6155e9aad21d9b58133f720fc77a55c6fef1b9c3`
- Purpose: multi-revision cache inspection and object-definition comparison.
- Burial Grounds use: identify source-revision objects, compare them with revision 727, and build explicit remap tables before packing maps.
- Important: the upstream repository does not currently advertise a formal GitHub license, so the setup script clones the upstream source instead of vendoring a copy into this repository.

### Stugger 667/718 Basic Map Packer — enabled as upstream download
- Thread: https://rune-server.org/threads/667-718-basic-map-packer.695291/
- Download: https://www.dropbox.com/scl/fi/ib2h2dtrl0pza8b9lruxm/Map-Packer.rar?rlkey=dhajyz6xr8j5c69cobh9evs3a&dl=1
- Purpose: pack Stugger-format map releases. The author states it was tested on 667 and 718.
- Burial Grounds use: source-map inspection and isolated compatibility testing only. Never point this directly at the production/dev canonical 727 cache.

### Stugger 667 Cache Definitions Editor / Model Packer source — enabled as upstream download
- Thread: https://rune-server.org/threads/opensource-cache-definitions-editor.694828/
- Download: https://www.dropbox.com/scl/fi/25p5m915idqq3gdhgdhhb/667-Cache-Editor-opensource.rar?rlkey=d2z8psyt5nl9yltiejg3ay0w0&dl=1
- Purpose: inspect how Stugger handled 667 NPC/item/object definitions and model packing.
- Burial Grounds use: reference implementation only; definition layouts must be validated against 727 before adapting any code.

## Useful but not bundled

### Stugger full Map Editor
His public Map Editor thread documents a capable editor, but the author explicitly says it was not for sale/release. We cannot install a tool that was never publicly distributed. The public free maps and Basic Map Packer remain usable inputs.

### Stugger 667/718 CS2 Editor
The thread shows the tool and 718 instruction conversion, but there is no confirmed public release in the thread. Not bundled.

### OSRS content transferrers
Intentionally excluded. Burial Grounds is revision 727 and our current priority is nearby 667/718-era content. OSRS conversion would add another translation layer and is not needed for the Greyhaven map-import work.

## Setup

From the repository root:

powershell -ExecutionPolicy Bypass -File .\tools\map-pipeline\bootstrap-map-tools.ps1

That installs the pinned RS-DataAPI checkout into `.third-party-tools\RS-DataAPI`.

To also download the Stugger archives from their original release links:

powershell -ExecutionPolicy Bypass -File .\tools\map-pipeline\bootstrap-map-tools.ps1 -IncludeStuggerDownloads

Third-party tools/downloads are deliberately stored under `.third-party-tools` and ignored by Git. This keeps our repository reproducible without redistributing unlicensed binaries or source archives.

## 727 safety rule

No third-party packer/editor is allowed to write directly to the canonical Burial Grounds cache. Always:
1. make/use a disposable cache copy;
2. test one region;
3. inspect terrain/land/object output;
4. build an object-remap table;
5. validate collision/rendering;
6. only then reproduce the validated changes through our 727-native workflow.
