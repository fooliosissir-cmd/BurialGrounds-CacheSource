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

Status: **INSPECTED / PRIVATE-STAGED / HOLD FOR REDISTRIBUTION**

The user supplied `Runesuite_modelrelease.zip` through private Library storage, so the archive bytes are now available for conversion work without bypassing the original forum/download gate. The raw archive is not committed here.

Archive contents directly inspected:
- Super Shenron — `80972.dat`;
- Solak — `solak.dat`;
- Fire Drake — Big / Mid / Small model variants;
- Shadow Drake — Big / Mid / Small model variants;
- `New_Boss.mqo` custom large raid-boss source mesh;
- Vorkath armour;
- Valk armour;
- BOTLG weapon models.

First boss decode batch:
- **8 RuneScape `.dat` boss models decoded cleanly** through the old/new model layouts compatible with Darkan's `ModelDecoder`;
- every decoded model has valid non-empty geometry and in-range triangle indices;
- private cache-source-compatible GLB staging files, preview GLBs and PNG renders were generated;
- `New_Boss.mqo` was parsed into a preview GLB but still needs RuneScape skin/material/animation translation;
- no bundled executable was run.

Decoded bosses currently staged:
- Super Shenron;
- Solak;
- Fire Drake Big / Mid / Small;
- Shadow Drake Big / Mid / Small.

Animation/dependency note:
- Shadow/Fire Drake are described by the release as using Roc animations and their skin data survives decoding;
- Shenron and Solak still need animation/config dependency mapping;
- material/texture dependencies must be checked before a 727 cache-pack test.

See `docs/boss-model-decode-progress.md` for hashes, geometry counts and the acceptance pipeline.

### Burial Grounds fit

Technically strong because the decoded models fall directly inside model layouts supported by the 727 tooling. They are **decoded and privately staged, not production-approved**. Rights must still be checked asset-by-asset before raw third-party bytes are committed or redistributed.

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

### Boss/model package queue
1. **667/718 custom NPC/armor/item release — first boss batch decoded and privately staged**
2. Venomite 718
3. Noxious 718
4. Onyx 718
5. 667/718 Raid/OSRS model pack
6. Hyperion 718/751

---

## Current hard blocker

The first 667/718 boss-model archive is no longer blocked: the user supplied it privately and its boss models are now decoded/staged.

Other candidate packages are still hosted on Dropbox, Mega, MediaFire, or behind authenticated forum downloads. Those packages remain blocked until their archive bytes are supplied through an authorized source such as a conversation upload, Library file, connected storage, or GitHub-hosted binary.

No authentication gate or redistribution restriction should be bypassed.

For each newly available archive, the next pass is:

1. enumerate every file;
2. hash every binary;
3. classify map/model/texture/config/animation files;
4. identify original revision and region/model IDs;
5. map dependencies;
6. compare IDs against the 727 cache;
7. assign a conversion status: direct / remap / rebuild / reject;
8. record candidate Burial Grounds use;
9. test only cleared assets in Developer World.
