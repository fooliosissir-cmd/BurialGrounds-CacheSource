# Burial Grounds — External Custom Content Unpacked Inventory

Inventory date: 2026-10-02  
Target: Burial Grounds / Darkan revision 727  
Branch: `dev`

This document records what has actually been inspected, what is only metadata-visible, what is blocked behind an external archive host/login, and what is suitable for a 727 conversion pass.

## Status legend

- **INSPECTED** — source tree/archive contents were directly examined.
- **PARTIAL** — release page/details were examined but the archive bytes are not available in the current tool environment.
- **REFERENCE** — useful design/code/tool source; not itself a production asset pack.
- **HOLD** — do not redistribute or import raw files until reuse rights are clear.

---

## 1. Barrows Island map

Source repository: `yrfate/public-maps`  
Source archive: `barrows island.zip`  
Repository description: "Maps uploaded for anyone to use"  
Status: **INSPECTED**

### Archive inventory

The ZIP is 7,110 bytes and contains:

| File | Stored size | Unpacked size | Notes |
| --- | ---: | ---: | --- |
| `barrows island/3318.gz` | 4,293 B | 30,752 B | Map-region data |
| `barrows island/3319.gz` | 1,533 B | 2,493 B | Companion map/land data |
| `barrows island/merry xmas 2018.txt` | 628 B compressed | 1,296 B | Release/readme text |

Verified source ZIP blob SHA: `794246084f472c7ca7dbda4b0ef98ab8faeb2e6a`

Verified decompressed hashes:
- `3318.gz` → SHA-256 `4e1c9811f310aed72812e9f8891a016b9a5ae917be543649a22b7f9aae1fbf72`
- `3319.gz` → SHA-256 `fefce80e03390d4d4c8af5d17db2c30a6f292a98723f41915346634d0617eaeb`

### Layout/usefulness

- Barrows mounds are moved onto an isolated island.
- Water surrounds the activity.
- A boat is already part of the travel layout.
- The original activity coordinates must be rewired server-side.
- The release is low-revision, so the safest Burial Grounds path is to translate the layout into 727-native terrain/objects instead of assuming its object IDs can be packed directly.

### Burial Grounds fit

**High value.** Good candidate for the planned Barrows rework or a separate crypt-island activity.

---

## 2. 718 Custom RAIDS code

Source: `wyvern800/rsps-snippets`  
License: MIT  
Repository tree: 68 entries / 53 files / 15 directories  
Raid subsystem: 26 files across v1 and v2  
Status: **INSPECTED / REFERENCE**

### Raid v2 structure

- `RaidsController.java`
- `RaidsEncounter.java`
- `RaidsInterfaces.java`
- `RaidsLobbyController.java`
- `RaidsManager.java`
- `data/Raid.java`
- `data/RaidBoss.java`
- `data/RaidDrops.java`
- `data/RaidMap.java`
- `data/RaidTiles.java`
- `impl/AnarothCastle.java`
- `impl/KarkathsTemple.java`

### Mechanics identified

- Team-based raids with maximum five players.
- Each encounter supplies its own boss, map, tiles and drop tables.
- No kill-time limit in the released implementation.
- Encounter registration is interface-driven enough to translate cleanly into a Darkan-specific implementation.

### Included encounter definitions

#### Anaroth Castle
- Boss definition ID: `8335`
- Name: `Foul Winterglaze`
- Base HP: `4000`
- Dynamic/party-based combat level uses `-1`
- Raid map metadata: size `{3,3}`, source `{451,416}`
- Contains four drop tiers: very rare, rare, uncommon, normal.

#### Karkath's Temple
- Boss definition ID: `13216`
- Name: `Leuuni, the Gorilla`
- Base HP: `20000`
- Dynamic/party-based combat level uses `-1`
- Raid map metadata: size `{4,5}`, source `{244,405}`
- Contains four drop tiers.

### Burial Grounds fit

**High value as code architecture.** Port the encounter abstraction, party scaling concepts and reward-tier structure into Darkan. Do not blindly copy Matrix packet/interface logic or old item IDs.

---

## 3. RSPSi-742 high-revision map editor

Source: `MrSlayerGod/RSPSi-742`  
License: MIT  
Status: **INSPECTED / REFERENCE**

### Repository inventory

- 465 total tree entries
- 353 files
- 112 directories
- 282 Java files
- 38 FXML files
- 5 DAT files
- 2 PNG files
- cache library and 742-specific plugin included

### 742-specific loaders identified

- `AnimationDefLoader.java`
- `AnimationFrameLoader.java`
- `AnimationSkinLoader.java`
- `FloorDefLoader.java`
- `MapIndexLoaderOSRS.java`
- `ObjectDefLoader.java`
- `RSAreaLoaderOSRS.java`
- `SpotAnimationLoader.java`
- `TextureLoaderOSRS.java`
- `VarbitLoaderOSRS.java`
- `Plugin742.java`

### Important limitations from the project itself

- Tested against 742, not guaranteed for 718/727.
- Experimental; author estimates roughly 75–80% functionality.
- Some meshes/textures can preview incorrectly.
- No under-map landscape generation.
- HD water maps can therefore preview/import incorrectly.
- Real-client verification remains mandatory after any conversion.

### Burial Grounds fit

**High-value tool/reference.** The useful part is its high-revision cache/map decoding and map editing path. We should adapt the relevant loaders for 727 rather than treating it as a drop-in editor.

---

## 4. Matrix NPC/Object SpawnEditor

Source: `MrSlayerGod/SpawnEditor`  
License: GPL-3.0  
Status: **INSPECTED / REFERENCE**

### Repository inventory

- 142 tree entries
- 101 files
- 41 directories
- 23 Java source files
- 50 compiled class files
- 6 JSON files
- 4 JARs
- bundled world map image and definition dumps

Notable bundled data:
- `SpawnEditor-Built/resources/map.png` — ~4.27 MB
- `SpawnEditor-Built/resources/npcs.json` — ~1.39 MB
- `SpawnEditor-Built/resources/objects.json` — ~7.40 MB
- `SpawnEditor-Built/resources/spawns.json` — ~270 KB

### Bundled RAR inspected

`Server_Classes_&_JSON_Tools.rar` is 35,714 bytes. Its archive metadata exposes these useful files:

- `Matrix_Classes/classes for server/NPCListDumper.java`
- `Matrix_Classes/classes for server/NPCSpawning.java`
- `Matrix_Classes/classes for server/ObjectListDumper.java`
- `Matrix_Classes/java2json/java-to-json.py`
- `java2json/convert_npc_spawns.py`
- `java2json/java-to-json.py`
- `java2json/NPCSpawning.java`
- `java2json/spawns.json`

### Workflow identified

- Dumps cache NPC/object definitions to JSON.
- Converts static Matrix Java spawn calls to JSON.
- Editor modifies `spawns.json` interactively.
- NPC hot reload is supported.
- Object hot reload is documented as buggy and may require restart.

### Burial Grounds fit

Useful conceptually for accelerating Greyhaven NPC/object placement, but **do not copy GPL source into Burial Grounds unless we intentionally accept the license implications**. A clean-room equivalent using our existing Darkan JSON/Kotlin structures is preferable.

---

## 5. Stugger 667/718 HD map releases

Status: **PARTIAL — release metadata and direct archive locations verified; archive bytes are on Dropbox and are not downloadable by the current repository tooling**

The releases are highly relevant because the author added explicit 718 support and the maps use the pre-RS3 HD map family.

### Snowy Area V1
- Region: `13119`
- Center: `3296,4064,0`
- Frozen lake is intentionally unwalkable.
- Direct archive location is recorded in `custom-content-source-inventory.md`.
- Candidate use: frozen ruin, winter boss approach, or northern optional activity.

### Boss/Raids Room V1
- Region: `1329`
- Center: `352,3168,0`
- Includes combat room, death/spectator space, reward/exit layout.
- Chest objects noted by author: `2403` and `2404`.

### Boss/Raids Room V1.1
- Revised center/combat floor.
- Expanded chest/reward/exit room.
- Added combat-floor noise/pebbles.

### Home Island V1
- Region: `11817`
- Spawn: `2974,2653,0`
- Posted XTEA: `{740863947, -1459447536, -1272357052, -1730407126}`

### Home Island V1.1
Adds:
- Slayer hut
- runecrafting altar
- expanded thieving area
- additional foliage/decor

### Resource Dungeon V1
- Region: `6724`
- Entrance/exit rope: `1700,4381,0`
- Yew trees
- magic trees
- fishing water
- cooking fire
- tin
- copper
- iron
- coal
- gold
- mithril
- adamant

### Edgeville variants
- V1.1 / V2
- V1.2 / V3
- Remade
- V1.2 has an explicitly posted 718 key set: `{984072594, 1745205991, -2099139242, -991644832}`

### Burial Grounds fit

**Very high.** Resource Dungeon and Boss/Raids Room are the first map archives to run through a 727 conversion test once bytes are available.

---

## 6. Venomite 718 semi-custom package

Status: **PARTIAL / HOLD — public release description inspected; package download is forum-gated**

Reported inventory:
- 3 event bosses
- 12 OSRS bosses plus additional content
- 100+ custom models made for the project
- many NPC configurations
- custom interfaces
- primarily revision-685-style item models
- some custom maps credited to Patrity

### Burial Grounds fit

**Very high potential.** Close revision and older visual style make this one of the best candidate packages for selective 727 conversion.

### Blocker

Archive bytes require an authenticated/gated download. No bypass was attempted.

---

## 7. Onyx / Matrix 2023 full 718 package

Status: **PARTIAL / HOLD — metadata inspected; package is forum-gated**

Reported inventory:
- full 718 cache
- client
- source
- unique bosses not present in normal RuneScape
- unique custom gear

### Burial Grounds fit

High potential for boss/model research, but raw asset reuse must be reviewed individually.

---

## 8. 667/718 custom NPC / armor / item model release

Status: **INSPECTED / PRIVATE STAGING — archive bytes received as a user-provided ZIP on 2026-10-02 and fully unpacked**

Verified archive:
- `Runesuite_modelrelease.zip`
- ZIP size: 1,285,127 bytes
- ZIP SHA-256: `ce96fc03a19ac1061464df36a404fbddd075ba4b7357aa075711852b1e442258`
- 40 files / 4,575,477 unpacked bytes
- 37 RuneScape model DAT files, 33 unique model payload hashes
- 1 editable Metasequoia source model: `New_Boss.mqo`
- bundled `DatMaker.exe` was quarantined and **not executed**

Verified assets:
- **Super Shenron** — `80972.dat`, old model format, 1,394 vertices / 2,630 faces.
- **Solak** — new model format v15, 6,397 vertices / 11,737 faces / 1 texture face.
- **Shadow Drake / Fire Drake** — six size variants, all new model format v17.
- **Valkyrie armor + wings** — 11 models, new model format v19.
- **Vorkath armor** — helm/chest/legs/gloves/boots drop + wear models, old model format.
- **Bow of the Last Guardian** — drop/wield/textured-wield models; textured wield declares 2 texture faces.
- **Custom large raid boss** — `New_Boss.mqo`, 266 declared materials and three MQO object layers, each 5,573 vertices / 10,651 triangular faces; no external image texture paths.

Dependency findings:
- No animation archives/sequences are included in this ZIP.
- No NPC/item config definitions are included for the bosses or armor.
- No standalone image textures are included.
- Shadow/Fire Drake are described by the release metadata as using Roc animations; that linkage must be reconstructed against the 727 cache.
- Some new-format models reference texture/material IDs that still need 727 compatibility checks.

Private staging artifacts:
- Full unpacked inventory and SHA-256 list are under `third_party/custom-content/runesuite-667-718-custom-npc-armor-items/`.
- Super Shenron raw model is staged separately under the private staging branch for conversion work.
- The authoritative 727 cache has **not** been modified.

### Burial Grounds fit

**Very high technical value.** The pack is close enough to 727 to justify isolated conversion tests. Production/public reuse still needs asset-by-asset provenance review; conversion should use free 727 model/config IDs and a disposable Developer World cache first.

---

## 9. 667/718 high-revision Raid/OSRS model pack

Status: **PARTIAL / HOLD — metadata inspected; archive is gated**

Reported inventory:
- Raid 1 / Raid 2 armor, items and weapons
- Ancestral
- colored twisted bows
- Scythe
- Nightmare staves
- Revenant weapons
- Mage Arena II capes
- custom-colored bonds
- mystery-box models
- chest object models
- some high-revision definitions/ints

### Burial Grounds fit

High potential for earned reward containers, cosmetics and selected equipment after rights/visual review.

---

## 10. Noxious 718 custom cache/model release

Status: **PARTIAL / HOLD**

Reported:
- custom items
- RS3 models converted/fitted to 718
- modeler describes the converted set as optimized for 718

### Burial Grounds fit

Good source for learning 718 conversion patterns and selectively evaluating models. Do not replace the 727 cache with the Noxious cache.

---

## 11. MagePS organized maps/models

Status: **PARTIAL / HOLD**

Reported:
- organized custom maps
- organized custom models

A later forum reply indicates some model links may be stale/broken.

### Burial Grounds fit

Potential map-layout source; lower priority until the actual archive can be obtained and verified.

---

## 12. Hyperion 718/751 custom-boss release

Status: **PARTIAL / HOLD**

Reported:
- custom/OSRS bosses
- working animations for some imported bosses
- associated custom items
- maps/map objects were unfinished

### Burial Grounds fit

Use primarily to study boss model ↔ animation/config relationships.

---

## 13. Additional released map layouts

These are lower-revision RuneScape-style map releases. The preferred 727 strategy is to reconstruct/remap their layouts with 727-native objects unless direct conversion proves clean.

### Custom two-floor boss map
Status: **PARTIAL**
- Boss on first floor.
- Damage thresholds can trigger minions from four corners.
- Searchable caskets support a soul mechanic.
- North stairs lead to a second-floor treasure room.
- Strong candidate to merge conceptually with our raid framework.

### Custom Manor
Status: **PARTIAL**
- Multi-floor manor.
- Candidate haunted estate / side dungeon / quest location.
- Archive hosted externally.

### Chanston releases
Status: **PARTIAL**
- AhoyPK Donator Zone — region `10309`, around `2701,3279`
- Underground Castlewars — potentially useful as underground fort/PvE arena
- Author states these were practice maps or maps released with customer permission.

### Four-map community release
Status: **PARTIAL**
Four released regions with posted centers:
- `2600,4685,0`
- `2714,4645,0`
- `2714,4757,0`
- `3094,3493,0`

Archives are on Mega and are not directly accessible through the current repository tools.

---

## 14. Other model candidates still in the queue

Status: **METADATA ONLY / HOLD**

- Ziva's Torva Sets Textured — 36 models
- Elder Scythe — 718
- Custom Zaros Godsword
- MyScape model archive — unique models reportedly grouped in 90k+ IDs
- Coliseum model collection
- Genesis model collection
- Stargaze model collection
- 718/OSRS cache maps release

These remain inventory candidates until their downloadable contents and reuse terms can be inspected.

---

## What is actually ready to use now

### Ready as code/reference
1. **718 Custom RAIDS** — MIT; fully inspectable.
2. **RSPSi-742** — MIT; fully inspectable high-revision map-editor reference.
3. **Barrows Island release** — archive structurally inspected; low-revision conversion/rebuild can begin.
4. **SpawnEditor concepts** — fully inspectable, but GPL source should remain external/reference unless licensing strategy changes.

### First raw map archives to convert when archive bytes are available
1. Resource Dungeon V1
2. Boss/Raids Room V1.1
3. Snowy Area V1
4. Home Island V1.1
5. Edgeville V1.2
6. Barrows Island

### Next boss/model packages to unpack when archive bytes are available
1. Venomite 718
2. Noxious 718
3. Onyx 718
4. 667/718 Raid/OSRS model pack
5. Hyperion 718/751

---

## Current hard blocker

The uploaded 667/718 NPC/armor/item model release is no longer blocked: it has been fully unpacked and inventoried. Several *other* map/model archives remain hosted on Dropbox, Mega, MediaFire, or behind authenticated RuneSuite downloads. Those other packages cannot be truthfully called "unpacked" until their archive bytes are supplied or otherwise become accessible.

No authentication gate or redistribution restriction should be bypassed.

Once an archive is available as a conversation upload, Library file, or GitHub-hosted binary, the next pass is:

1. enumerate every file;
2. hash every binary;
3. classify map/model/texture/config/animation files;
4. identify original revision and region/model IDs;
5. map dependencies;
6. compare IDs against the 727 cache;
7. assign a conversion status: direct / remap / rebuild / reject;
8. record candidate Burial Grounds use;
9. test only cleared assets in Developer World.
